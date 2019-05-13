import { delayToLFOAttackRate } from './params'

export default class LFO {
  constructor({ frequency, delay = 0, sampleRate }) {
    // we need the phase to go x4 because of triangle
    this.anchorRate = 3.95 / sampleRate
    this.sampleRate = sampleRate
    this.direction = 1
    this.value = 0
    this.attackPhase = 0
    this.setRate(frequency)
    this.setDelay(delay)
    this.trigger()
  }

  setRate(frequency) {
    this.rateFactor = frequency * this.anchorRate
    this.value = -this.rateFactor
  }

  setDelay(delay) {
    this.delaySamples = delay * this.sampleRate
    this.attackSamples = delayToLFOAttackRate(delay) * this.sampleRate
  }

  trigger() {
    this.direction = 1
    this.delayPhase = 0
    this.attackPhase = 0
  }

  delayEnv() {
    this.delayPhase = this.delayPhase + 1
    if (this.attackPhase > this.attackSamples) {
      return 1
    } else if (this.delayPhase > this.delaySamples) {
      this.attackPhase = this.attackPhase + 1
      return this.attackPhase / this.attackSamples
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
