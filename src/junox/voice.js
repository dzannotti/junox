import DCO from './dco'
import ADSREnvelope from './envelope'
import { noteToFrequency } from '../utils'
import LowPassFilter from './lpf'
import {
  paramToPWM,
  sliderToTime,
  sliderToFilterFreqNorm,
  sliderToResonance,
  sliderToSustain,
  sliderToDecay
} from './params'

export default class Voice {
  constructor({ note, patch, velocity, sampleRate }) {
    this.note = note
    this.finished = false
    this.velocity = velocity
    this.patch = patch
    this.sampleRate = sampleRate
    this.dco = new DCO({
      frequency: noteToFrequency(this.note),
      sampleRate,
      saw: patch.dco.saw,
      pulse: patch.dco.pulse,
      sub: patch.dco.sub,
      noise: patch.dco.noise,
      pwm: paramToPWM(patch.dco.pwm)
    })
    this.env = new ADSREnvelope({
      attack: sliderToTime(patch.env.attack),
      decay: sliderToDecay(patch.env.decay),
      sustain: sliderToSustain(patch.env.sustain),
      release: sliderToTime(patch.env.release),
      sampleRate
    })
    this.vcf = new LowPassFilter({
      sampleRate,
      resonance: sliderToResonance(patch.vcf.resonance),
      cutoff: sliderToFilterFreqNorm(patch.vcf.frequency, sampleRate)
    })

    // preload for ticking
    this.env.render()
  }
  render() {
    const dco = this.dco.render()
    const env = this.patch.vcaType == 'env' ? this.env.render() : 1
    const vcf = this.vcf.render(dco)
    return this.velocity * vcf * env
  }

  noteOff() {
    this.env.noteOff()
  }

  tick(lfo) {
    const positiveLFO = lfo / 2 + 0.5
    const C2NoteNumber = 36
    const keyFollowDenominator = 5 * 12
    const vcfDirection = this.patch.vcf.modPositive ? 1 : -1
    this.env.tick()
    this.dco.tick(
      lfo * this.patch.dco.lfo,
      paramToPWM(positiveLFO * this.patch.dco.pwm * this.patch.dco.lfoMod)
    )
    let vcfCutoffValue = this.patch.vcf.frequency * 1.4 * 10
    vcfCutoffValue += this.env.out * this.patch.vcf.envMod * 14 * vcfDirection
    vcfCutoffValue += lfo * this.patch.vcf.lfoMod * 3.5
    vcfCutoffValue +=
      this.patch.vcf.keyMod *
      5 *
      ((this.note - C2NoteNumber) / keyFollowDenominator - 0.4)
    this.vcf.cutoff = sliderToFilterFreqNorm(vcfCutoffValue, this.sampleRate)
  }

  isFinished() {
    return this.env.isFinished()
  }

  updatePatch(patch) {
    // TODO: fix me for real time
    this.dco.saw = patch.dco.saw
    this.dco.pulse = patch.dco.pulse
    this.dco.sub = patch.dco.sub
    this.dco.noise = patch.dco.noise
    this.dco.pwm = paramToPWM(patch.dco.pwm)
    this.env.attack = sliderToTime(patch.env.attack)
    this.env.decay = sliderToDecay(patch.env.decay)
    this.env.sustain = sliderToSustain(patch.env.sustain)
    this.env.release = sliderToTime(patch.env.release)
    this.vcf.resonance = sliderToResonance(patch.vcf.resonance)
    this.vcf.cutoff = sliderToFilterFreqNorm(patch.vcf.frequency * 10 * 1.4)
  }
}
