import LFO from './lfo'

const MAXBUFFERSIZE = 15000

class RingBuffer {
  constructor() {
    this.buffer = new Float32Array(MAXBUFFERSIZE).fill(0)
    this.index = 0
  }

  getSample(sampleIndex) {
    let localIndex = this.index - sampleIndex
    if (localIndex < 0) {
      localIndex += MAXBUFFERSIZE
    }
    if (localIndex >= MAXBUFFERSIZE) {
      localIndex -= MAXBUFFERSIZE
    }
    return this.buffer[localIndex]
  }

  addSample(sample) {
    this.buffer[this.index] = sample
    this.index = (this.index + 1) % MAXBUFFERSIZE
  }
}

export default class Chorus {
  constructor({ sampleRate, rate, delay, wet = 0.5 }) {
    this.ringBuffer = new RingBuffer()
    this.sampleRate = sampleRate
    this.lfo = new LFO({ frequency: rate, sampleRate })
    this.delay = delay * sampleRate
    this.wet = wet
  }

  reset() {
    this.ringBuffer.buffer.fill(0)
  }

  render(input) {
    const lfo = this.lfo.render() / 2 + 0.5
    const leftMod = lfo
    const rightMod = 1 - lfo
    const leftDelayTime = this.delay + leftMod * this.sampleRate * 0.00369
    const rightDelayTime = this.delay + rightMod * this.sampleRate * 0.00369
    const lYN = this.ringBuffer.getSample(Math.round(leftDelayTime))
    const rYN = this.ringBuffer.getSample(Math.round(rightDelayTime))
    this.ringBuffer.addSample(input)
    return [input + lYN * this.wet, input + rYN * this.wet]
  }
}
