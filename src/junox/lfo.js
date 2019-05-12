export default class LFO {
  constructor ({ frequency, delay = 0, sampleRate }) {
    this.anchorRate = 1 / sampleRate
    this.phase = 0
    this.setRate(frequency)
    this.setDelay(delay)
    this.trigger()
  }

  setRate (frequency) {
    this.incrementRate = this.anchorRate * frequency
  }

  setDelay (delay) {
    this.delay = delay * this.anchorRate
  }

  trigger () {
    this.delayPhase = 0
  }

  delayEnv () {
    this.delayPhase += this.delay
    if (this.delay < 0.0001 || this.delayPhase > 2) {
      return 1
    } else if (this.delayPhase < 1) {
      return 0
    }
    // from juno manual the volume seems to grows by the same distance it's delayed
    return this.delayPhase - 1
  }

  render () {
    let out = 0
    this.phase += this.incrementRate
    if (this.phase > 1.01) {
      this.phase -= 1
    }
    if (this.phase < 0.5) {
      out = -1 + this.phase * 4
    } else {
      out = 2 - this.phase * 4 + 1
    }
    return out * this.delayEnv()
  }
}
