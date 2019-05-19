// Diode Ladder Filter based on Will Pirkle's C++ Code
import OnePoleFilter from './onepolefilter'
import { TWOPI } from './utils'

export default class DiodeLadder {
  constructor({ cutoff, resonance, sampleRate }) {
    this.lpf1 = new OnePoleFilter({ sampleRate })
    this.lpf2 = new OnePoleFilter({ sampleRate })
    this.lpf3 = new OnePoleFilter({ sampleRate })
    this.lpf4 = new OnePoleFilter({ sampleRate })

    this.T = 1 / sampleRate

    this.K = 0
    this.gamma = 0.0

    this.SG1 = 0.0
    this.SG2 = 0.0
    this.SG3 = 0.0
    this.SG4 = 0.0

    this.lpf1.a0 = 1.0
    this.lpf2.a0 = 0.5
    this.lpf3.a0 = 0.5
    this.lpf4.a0 = 0.5

    // last LPF has no feedback path
    this.lpf4.gamma = 1.0
    this.lpf4.delta = 0.0
    this.lpf4.epsilon = 0.0
    this.setCutoff(cutoff)
    this.setResonance(resonance)
  }

  setCutoff(cutoff) {
    // calculate alphas
    const wd = TWOPI * cutoff
    const wa = (2 / this.T) * Math.tan((wd * this.T) / 2)
    const g = (wa * this.T) / 2

    // Big G's
    const G4 = (0.5 * g) / (1.0 + g)
    const G3 = (0.5 * g) / (1.0 + g - 0.5 * g * G4)
    const G2 = (0.5 * g) / (1.0 + g - 0.5 * g * G3)
    const G1 = g / (1.0 + g - g * G2)

    // our big G value GAMMA
    this.gamma = G4 * G3 * G2 * G1

    this.SG1 = G4 * G3 * G2
    this.SG2 = G4 * G3
    this.SG3 = G4
    this.SG4 = 1.0

    // set alphas
    const alphaG = g / (1.0 + g)
    this.lpf1.alpha = alphaG
    this.lpf2.alpha = alphaG
    this.lpf3.alpha = alphaG
    this.lpf4.alpha = alphaG

    // set betas
    const betaG = 1.0 + g
    this.lpf1.beta = 1.0 / (betaG - g * G2)
    this.lpf2.beta = 1.0 / (betaG - 0.5 * g * G3)
    this.lpf3.beta = 1.0 / (betaG - 0.5 * g * G4)
    this.lpf4.beta = 1.0 / betaG

    // set gammas
    this.lpf1.gamma = 1.0 + G1 * G2
    this.lpf2.gamma = 1.0 + G2 * G3
    this.lpf3.gamma = 1.0 + G3 * G4

    // set deltas
    const deltaG = 0.5 * g
    this.lpf1.delta = g
    this.lpf2.delta = deltaG
    this.lpf3.delta = deltaG

    // set epsilons
    this.lpf1.epsilon = G2
    this.lpf2.epsilon = G3
    this.lpf3.epsilon = G4
  }

  // decode the resonance value - resonance is [1..10]
  setResonance(resonance) {
    this.K = (17.0 * (resonance - 1.0)) / 9.0
  }

  render(xn) {
    this.lpf3.setFeedback(this.lpf4.feedbackOutput())
    this.lpf2.setFeedback(this.lpf3.feedbackOutput())
    this.lpf1.setFeedback(this.lpf2.feedbackOutput())

    // --- form input
    const sigma =
      this.SG1 * this.lpf1.feedbackOutput() +
      this.SG2 * this.lpf2.feedbackOutput() +
      this.SG3 * this.lpf3.feedbackOutput() +
      this.SG4 * this.lpf4.feedbackOutput()

    // --- form input
    let U = (xn - this.K * sigma) / (1 + this.K * this.gamma)

    // ---NLP
    U = Math.tanh(U)

    // --- cascade of four filters
    return this.lpf4.render(
      this.lpf3.render(this.lpf2.render(this.lpf1.render(U)))
    )
  }
}
