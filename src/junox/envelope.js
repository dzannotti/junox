import { lerp } from '../utils'

const ENVELOPE_STATES = {
  ATTACK: 'attack',
  DECAY: 'decay',
  SUSTAIN: 'sustain',
  RELEASE: 'release'
}

export default class ADSREnvelope {
  constructor({ attack, decay, sustain, release, sampleRate }) {
    this.attackRate = 1 / (attack * sampleRate)
    this.decayRate = 1 / (decay * sampleRate)
    this.sustain = sustain
    this.releaseRate = 1 / (release * sampleRate)
    this.reset()
  }

  reset() {
    this.time = 0
    this.out = 0
    this.attackFactor = 0.00001
    this.decayFactor = 0.00001
    this.releaseFactor = 0.0001
    this.state = ENVELOPE_STATES.ATTACK
  }

  render() {
    if (this.state === ENVELOPE_STATES.SUSTAIN) {
      this.out = this.sustain
    }
    if (this.state === ENVELOPE_STATES.ATTACK) {
      this.attackFactor += this.time * this.attackRate
      this.out += (1.41 - this.out) * this.attackFactor
      this.out = Math.min(1, this.out)
    } else if (this.state === ENVELOPE_STATES.DECAY) {
      this.decayFactor += this.time * this.decayRate
      this.out -= (this.out - this.sustain + 0.024) * this.decayFactor
      this.out = Math.max(this.out, this.sustain)
    } else if (this.state === ENVELOPE_STATES.RELEASE) {
      this.releaseFactor -= this.time * this.releaseRate
      this.out += (1.41 - this.out) * this.releaseFactor
      this.out = Math.min(0, this.out)
    }
    return this.out
  }

  tick() {
    // TODO: refactor this, it reads horribly
    if (this.state === ENVELOPE_STATES.ATTACK) {
      this.time += this.attackRate
      if (this.time > 1) {
        this.time = 0
        this.state = ENVELOPE_STATES.DECAY
      }
    } else if (this.state === ENVELOPE_STATES.DECAY) {
      this.time += this.decayRate
      if (this.time > 1) {
        this.state = ENVELOPE_STATES.SUSTAIN
      }
    }
  }

  noteOff() {
    if (this.state !== ENVELOPE_STATES.RELEASE) {
      this.time = 0
      this.state = ENVELOPE_STATES.RELEASE
    }
  }

  isFinished() {
    return this.time > this.release && this.state === ENVELOPE_STATES.RELEASE
  }
}
