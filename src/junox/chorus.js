import LFO from './lfo'

const MAXBUFFERSIZE = 256

class RingBuffer {
  constructor() {
    this.buffer = new Float32Array(MAXBUFFERSIZE).fill(0)
    this.index = 0
  }

  ringBufferIndex(index) {
    if (index < 0) {
      return index + MAXBUFFERSIZE
    }
    if (index >= MAXBUFFERSIZE) {
      return index - MAXBUFFERSIZE
    }
    return index
  }

  getSample(sampleIndex) {
    let localIndex = this.ringBufferIndex(this.index - sampleIndex)
    const indexA = Math.trunc(localIndex)
    const fractional = localIndex - indexA
    const indexB = this.ringBufferIndex(indexA + 1)
    return (
      this.buffer[indexA] * fractional + this.buffer[indexB] * (1 - fractional)
    )
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
    this.minDelaySamples = this.sampleRate * 0.00369
    this.wet = wet
    this.dry = 1 - wet
  }

  reset() {
    this.ringBuffer.buffer.fill(0)
  }

  render(input) {
    const lfo = this.lfo.render() / 2 + 0.5
    const leftMod = lfo
    const rightMod = 1 - lfo
    const leftDelayTime = this.delay * leftMod + this.minDelaySamples
    const rightDelayTime = this.delay * rightMod + this.minDelaySamples
    const lYN = this.ringBuffer.getSample(leftDelayTime)
    const rYN = this.ringBuffer.getSample(rightDelayTime)
    this.ringBuffer.addSample(input)
    return [input + lYN * this.wet, input + rYN * this.wet]
  }
}
