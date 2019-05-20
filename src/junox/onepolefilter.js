// One Pole Filter based on Will Pirkle's C++ Code
import { TWOPI } from './utils'

export default class OnePoleFilter {
  constructor({ sampleRate, cutoff }) {
    this.beta = 0.0
    this.z1 = 0.0
    this.gamma = 1.0
    this.delta = 0.0
    this.epsilon = 0.0
    this.a0 = 1.0
    this.feedback = 0.0
    if (cutoff) {
      this.setCutoff(cutoff)
    }
    this.T = 1 / sampleRate
  }

  setFeedback(feedback) {
    this.feedback = feedback
  }

  feedbackOutput() {
    return this.beta * (this.z1 + this.feedback * this.delta)
  }

  setCutoff(cutoff) {
    const wd = TWOPI * cutoff
    const wa = (2 / this.T) * Math.tan((wd * this.T) / 2)
    const g = (wa * this.T) / 2
    this.alpha = g / (1.0 + g)
  }

  render(input) {
    const xIn =
      input * this.gamma + this.feedback + this.epsilon * this.feedbackOutput()
    const vn = (this.a0 * xIn - this.z1) * this.alpha
    const out = vn + this.z1
    this.z1 = vn + out
    return out
  }
}
