import { delayToLFOAttackRate } from './params'
export default class LFO {
  constructor({ frequency, delay = 0, sampleRate }) {
    // we need the phase to go x4 because of triangle
    this.anchorRate = 3.95 / sampleRate
    this.msRate = 1 / sampleRate
    this.direction = 1
    this.value = 0
    this.attackPhase = 0
    this.attackRate = this.msRate
    this.setRate(frequency)
    this.setDelay(delay)
    this.trigger()
  }

  setRate(frequency) {
    this.rateFactor = frequency * this.anchorRate
    this.value = -this.rateFactor
  }

  setDelay(delay) {
    this.delay = (1 / (delay + 0.001)) * this.msRate
    this.attackRate = delayToLFOAttackRate(delay) * this.msRate
  }

  trigger() {
    this.direction = 1
    this.delayPhase = 0
    this.attackPhase = 0
  }

  delayEnv() {
    this.delayPhase += this.delay
    if (this.attackPhase > 1) {
      return 1
    } else if (this.delayPhase > 1) {
      this.attackPhase += this.attackRate
      return this.attackPhase
    }
    return 0
  }

  render() {
    let oldValue = this.value
    let newValue = oldValue
    if (this.direction === 1) {
      newValue += this.rateFactor
      if (newValue > 1) {
        this.direction = -1
        newValue = oldValue - this.rateFactor
      }
    } else {
      newValue -= this.rateFactor
      if (newValue < -1) {
        this.direction = 1
        newValue = oldValue + this.rateFactor
      }
    }
    this.value = newValue
    return this.value * this.delayEnv()
  }
}
