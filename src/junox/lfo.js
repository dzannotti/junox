export default class LFO {
  constructor ({ frequency, sampleRate }) {
    this.frequency = frequency
    this.sampleRate = sampleRate
    this.phase = 0
    this.tick()
  }

  tick () {
    this.samplesPerPeriod = (this.sampleRate / this.frequency).toFixed()
    this.phase = (this.phase + 1) % this.samplesPerPeriod
  }

  render () {
    const phase = this.phase / this.samplesPerPeriod
    return (2.0 * Math.sin(Math.sin(2.0 * Math.PI * phase))) / Math.PI
  }
}
