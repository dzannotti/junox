export default class LFO {
  constructor ({ frequency, sampleRate }) {
    this.anchorRate = 1.2 / sampleRate
    this.phase = 0
    this.setRate(frequency, 0)
  }

  setRate (frequency, delay) {
    this.incrementRate = this.anchorRate * frequency
  }

  setDelay (delay) {
    this.delay = this.anchorRate * delay
  }

  trigger () {
    this.delayPhase = 0
  }

  delayEnv () {
    this.delayPhase += this.delay
    if (this.delayPhase < 1) {
      // TODO: Precalc the denominator
      return (
        0.001 + ((Math.exp(this.delayPhase * 5) - 1) / (Math.exp(5) - 1)) * 2.25
      )
    }
    return 1
  }

  render () {
    this.phase += this.incrementRate
    if (this.phase > 1) {
      this.incrementRate -= this.incrementRate
    } else if (this.phase < -1) {
      this.incrementRate -= this.incrementRate
    }
    return this.phase * this.delayEnv()
  }
}
