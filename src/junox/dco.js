export default class Oscillator {
  constructor ({ frequency, sampleRate, saw, pulse, sub, noise, pwm = 0.5 }) {
    this.sampleRate = sampleRate
    this.pwm = pwm
    this.phase = 0
    this.phaseSub = 0
    this.sub = sub
    this.noise = noise
    this.pulse = pulse
    this.saw = saw
    this.frequency = frequency
    this.tick(0, this.pwm)
  }

  tick (freqMod, pwmMod) {
    const frequency = this.frequency * Math.pow(2, freqMod / 12)
    this.samplesPerPeriod = (this.sampleRate / frequency).toFixed()
    this.phase = (this.phase + 1) % this.samplesPerPeriod
    this.samplesPerPeriodSub = (this.sampleRate / (frequency / 2)).toFixed()
    this.phaseSub = (this.phaseSub + 1) % this.samplesPerPeriodSub
    if (pwmMod > 0.01) {
      this.pwm = pwmMod
    }
  }

  render () {
    const phase = this.phase / this.samplesPerPeriod
    const phaseSub = this.phaseSub / this.samplesPerPeriodSub
    let out = 0
    if (this.pulse) {
      out += phase > this.pwm ? -0.4 : 0.4
    }
    if (this.saw) {
      out += (0.5 - phase) * 0.6
    }
    if (this.sub > 0.01) {
      out += (phaseSub > 0.5 ? 0.5 : -0.5) * this.sub
    }
    if (this.noise > 0.01) {
      out += (Math.random() - 0.5) * this.noise
    }
    return out
  }
}
