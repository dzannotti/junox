export default class OnePoleFilter {
  constructor({ sampleRate, cutoff }) {
    this.beta = 0.0
    this.z1 = 0.0
    this.gamma = 1.0
    this.delta = 0.0
    this.epsilon = 0.0
    this.a0 = 1.0
    this.feedback = 0.0
    this.sampleRate = sampleRate
    if (cutoff) {
      this.setCutoff(cutoff)
    }
  }

  setFeedback(feedback) {
    this.feedback = feedback
  }

  feedbackOutput() {
    return this.beta * (this.z1 + this.feedback * this.delta)
  }

  setCutoff(cutoff) {
    const T = 1 / this.sampleRate
    const wd = 2 * Math.PI * cutoff
    const wa = (2 / T) * Math.tan((wd * T) / 2)
    const g = (wa * T) / 2
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
