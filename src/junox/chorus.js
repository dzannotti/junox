import LFO from './lfo'

const MAXBUFFERSIZE = 15000

class DelayBuffer {
  constructor () {
    this.buffer = Array(MAXBUFFERSIZE).fill(0)
    this.index = 0
  }

  getSample (sampleIndex) {
    let localIndex = this.index - sampleIndex
    if (localIndex < 0) {
      localIndex += MAXBUFFERSIZE
    }
    if (localIndex >= MAXBUFFERSIZE) {
      localIndex -= MAXBUFFERSIZE
    }
    return this.buffer[localIndex]
  }

  addSample (sample) {
    this.buffer[this.index] = sample
    this.index = (this.index + 1) % MAXBUFFERSIZE
  }
}

export default class Chorus {
  constructor ({ sampleRate, rate, feedback, delay }) {
    this.bufferL = new DelayBuffer()
    this.bufferR = new DelayBuffer()
    this.lfo = new LFO({ frequency: rate, sampleRate })
    this.feedback = feedback
    this.delay = delay
    this.wet = 0.7
    this.writeIndex = 0
  }

  render (input) {
    this.lfo.tick()
    const lfo = this.lfo.render() / 2 + 0.5
    const leftMod = lfo
    const rightMod = 1 - lfo
    const leftDelayTime = this.delay + leftMod * 22050 * 0.00369
    const rightDelayTime = this.delay + rightMod * 22050 * 0.00369
    const lXN = input
    const rXN = input
    const lYN = this.bufferL.getSample(Math.round(leftDelayTime))
    const rYN = this.bufferR.getSample(Math.round(rightDelayTime))
    const lCombined = lXN + rYN * this.feedback
    const rCombined = rXN + lYN * this.feedback
    this.bufferL.addSample(lCombined)
    this.bufferR.addSample(rCombined)
    this.writeIndex = (this.writeIndex + 1) % (MAXBUFFERSIZE - 1)
    return [input + lYN * this.wet, input + rYN * this.wet]
  }
}
