export default class BassBoost {
  constructor ({ frequency }) {
    this.frequency = frequency
    this.cap = 0
  }

  render (input, gain) {
    const feedback = 0.8
    const filterGain = 1.0 / (this.frequency + 1.0)
    this.cap = (input + this.cap * this.frequency) * filterGain
    return (input + this.cap * feedback) * gain
  }
}
