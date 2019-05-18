import DCO from './dco'
import ADSREnvelope from './envelope'
import { noteToFrequency } from '../utils'
import LowPassFilter from './lpf'
import DiodeLadder from './diodeladder'
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
    this.gate = new ADSREnvelope({
      attack: sliderToTime(0.1),
      decay: sliderToDecay(0.1),
      sustain: sliderToSustain(1),
      release: sliderToTime(0.1),
      sampleRate
    })
    this.moogVCF = new LowPassFilter({
      sampleRate,
      resonance: sliderToResonance(patch.vcf.resonance),
      cutoff: sliderToFilterFreqNorm(patch.vcf.frequency, sampleRate)
    })
    this.diodeLadderVCF = new DiodeLadder({
      sampleRate,
      cutoff: 12000,
      resonance: sliderToResonance(patch.vcf.resonance)
    })

    // preload for ticking
    this.env.render()
    this.gate.render()
  }
  render() {
    const dco = this.dco.render()
    const env = this.env.render()
    const gate = this.gate.render()
    // const vcf = this.moogVCF.render(dco)
    const vcf = this.diodeLadderVCF.render(dco)
    const vca = this.patch.vcaType === 'env' ? env : gate
    return this.velocity * vcf * vca
  }

  noteOff() {
    this.env.noteOff()
    this.gate.noteOff()
  }

  tick(lfo) {
    const positiveLFO = lfo / 2 + 0.5
    const C2NoteNumber = 36
    const keyFollowDenominator = 5 * 12
    const vcfDirection = this.patch.vcf.modPositive ? 1 : -1
    this.env.tick()
    this.gate.tick()
    this.dco.tick(
      lfo * this.patch.dco.lfo,
      paramToPWM(positiveLFO * this.patch.dco.pwm * this.patch.dco.lfoMod)
    )
    let vcfCutoffValue = this.patch.vcf.frequency * 1.1 * 10
    vcfCutoffValue += this.env.out * this.patch.vcf.envMod * 14 * vcfDirection
    vcfCutoffValue += lfo * this.patch.vcf.lfoMod * 3.5
    vcfCutoffValue +=
      this.patch.vcf.keyMod *
      5 *
      ((this.note - C2NoteNumber) / keyFollowDenominator - 0.4)
    this.moogVCF.cutoff = sliderToFilterFreqNorm(
      vcfCutoffValue,
      this.sampleRate
    )
    this.diodeLadderVCF.setCutoff(
      sliderToFilterFreqNorm(vcfCutoffValue, this.sampleRate) * 22050
    )
  }

  isFinished() {
    return this.env.isFinished() && this.gate.isFinished()
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
    this.moogVCF.resonance = sliderToResonance(patch.vcf.resonance)
    this.moogVCF.cutoff = sliderToFilterFreqNorm(patch.vcf.frequency * 10 * 1.4)
    this.diodeLadderVCF.setCutoff(
      sliderToFilterFreqNorm(patch.vcf.frequency * 10 * 1.4) * 22050
    )
    this.diodeLadderVCF.setResonance(sliderToResonance(patch.vcf.resonance))
  }
}
