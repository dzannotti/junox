import OnePoleFilter from './onepolefilter'

export default class DiodeLadder {
  constructor({ cutoff, resonance, sampleRate }) {
    this.lpf1 = new OnePoleFilter({ cutoff, sampleRate })
    this.lpf2 = new OnePoleFilter({ cutoff, sampleRate })
    this.lpf3 = new OnePoleFilter({ cutoff, sampleRate })
    this.lpf4 = new OnePoleFilter({ cutoff, sampleRate })

    this.K = 0
    this.gamma = 0.0

    // feedback scalars
    this.SG1 = 0.0
    this.SG2 = 0.0
    this.SG3 = 0.0
    this.SG4 = 0.0

    this.T = 1 / sampleRate
    this.setCutoff(cutoff)
    this.setResonance(resonance * 10)
  }

  setCutoff(cutoff) {
    // calculate alphas
    const wd = 2 * Math.PI * cutoff
    const wa = (2 / this.T) * Math.tan((wd * this.T) / 2)
    const g = (wa * this.T) / 2

    // Big G's
    const G4 = (0.5 * g) / (1.0 + g)
    const G3 = (0.5 * g) / (1.0 + g - 0.5 * g * G4)
    const G2 = (0.5 * g) / (1.0 + g - 0.5 * g * G3)
    const G1 = g / (1.0 + g - g * G2)

    this.gamma = G4 * G3 * G2 * G1

    this.SG1 = G4 * G3 * G2
    this.SG2 = G4 * G3
    this.SG3 = G4
    this.SG4 = 1.0

    // set alphas
    const G = g / (1.0 + g)

    this.lpf1.alpha = G
    this.lpf2.alpha = G
    this.lpf3.alpha = G
    this.lpf4.alpha = G

    // set betas
    this.lpf1.beta = 1.0 / (1.0 + g - g * G2)
    this.lpf2.beta = 1.0 / (1.0 + g - 0.5 * g * G3)
    this.lpf3.beta = 1.0 / (1.0 + g - 0.5 * g * G4)
    this.lpf4.beta = 1.0 / (1.0 + g)

    // set deltas
    this.lpf1.delta = g
    this.lpf2.delta = 0.5 * g
    this.lpf3.delta = 0.5 * g
    this.lpf4.delta = 0.0

    this.lpf1.gamma = 1.0 + G1 * G2
    this.lpf2.gamma = 1.0 + G2 * G3
    this.lpf3.gamma = 1.0 + G3 * G4
    this.lpf4.gamma = 1.0

    // set epsilons
    this.lpf1.epsilon = G2
    this.lpf2.epsilon = G3
    this.lpf3.epsilon = G4
    this.lpf4.epsilon = 0.0

    // set a0s
    this.lpf1.a0 = 1.0
    this.lpf2.a0 = 0.5
    this.lpf3.a0 = 0.5
    this.lpf4.a0 = 0.5
  }

  setResonance(resonance) {
    this.K = (17.0 * (resonance - 1.0)) / (10.0 - 1.0)
  }

  render(xn) {
    this.lpf4.setFeedback(0.0)
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
