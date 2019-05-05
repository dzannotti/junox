import keymirror from 'keymirror'
import { lerp } from '../utils'

const ENVELOPE_STATES = keymirror({
  ATTACK: null,
  DECAY: null,
  SUSTAIN: null,
  RELEASE: null
})

export default class ADSREnvelope {
  constructor ({ attack, decay, sustain, release, sampleRate }) {
    this.state = ENVELOPE_STATES.ATTACK
    this.time = 0
    this.attack = attack * 1000
    this.decay = decay * 1000
    this.sustain = sustain
    this.release = release * 1000
    this.msPerSample = 1000 / sampleRate
  }

  render () {
    if (this.state === ENVELOPE_STATES.SUSTAIN) {
      this.out = this.sustain
    }
    if (this.state === ENVELOPE_STATES.ATTACK) {
      const t = Math.min(1, this.time / this.attack)
      this.out = lerp(0, 1, t)
    } else if (this.state === ENVELOPE_STATES.DECAY) {
      const t = Math.min(1, this.time / this.decay)
      this.out = lerp(1, this.sustain, t)
    } else if (this.state === ENVELOPE_STATES.RELEASE) {
      const t = this.time / this.release
      if (t > 1) {
        this.out = 0
      } else {
        this.out = lerp(this.sustain, 0, t)
      }
    }
    return this.out
  }

  tick () {
    this.time = this.time + this.msPerSample
    // TODO: refactor this, it reads horribly
    if (this.time > this.attack && this.state === ENVELOPE_STATES.ATTACK) {
      this.time = 0
      this.state = ENVELOPE_STATES.DECAY
    } else if (this.time > this.decay && this.state === ENVELOPE_STATES.DECAY) {
      this.state = ENVELOPE_STATES.SUSTAIN
    }
  }

  noteOff () {
    if (this.state !== ENVELOPE_STATES.RELEASE) {
      this.time = 0
      this.state = ENVELOPE_STATES.RELEASE
    }
  }

  isFinished () {
    return this.time > this.release && this.state === ENVELOPE_STATES.RELEASE
  }
}
