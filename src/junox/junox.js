import set from 'lodash.set'
import Voice from './voice'
import Chorus from './chorus'
import LFO from './lfo'
import BassBoost from './bassboost'
import HighPassFilter from './hpf'
import {
  chorusModeToFreq,
  chorusModeToFeedback,
  chorusModeToDelay,
  sliderToLFOFreq,
  sliderToHPF
} from './params'

export default class Junox {
  constructor ({ patch, sampleRate, polyphony }) {
    this.patch = patch
    this.voices = []
    this.maxVoices = polyphony
    this.patch = patch
    this.sampleRate = sampleRate
    this.chorus = new Chorus({ sampleRate, rate: 1 })
    this.lfo = new LFO({
      frequency: sliderToLFOFreq(patch.lfo.frequency),
      sampleRate
    })
    this.bassBoost = new BassBoost({ frequency: 75 })
    this.hpf = new HighPassFilter({
      cutoff: sliderToHPF(patch.hpf),
      resonance: 1,
      sampleRate
    })
    this.update()
  }

  noteOn (note, velocity) {
    this.lastNoteOn = note
    const voiceIndex = this.voices.findIndex(voice => voice.note === note)
    const newVoice = new Voice({
      note,
      patch: this.patch,
      velocity,
      sampleRate: this.sampleRate
    })
    if (this.voices.length < this.maxVoices) {
      this.voices.push(newVoice)
      return
    }
    if (voiceIndex > -1) {
      this.voices[voiceIndex] = newVoice
      return
    }
    // TODO: recycle voice at minimum volume
    this.voices[0] = newVoice
  }

  noteOff (note) {
    this.voices.forEach(voice => voice.note === note && voice.noteOff())
  }

  tick () {
    this.lfo.tick()
    const lfo = this.lfo.render()
    this.voices.forEach(voice => voice.tick(lfo))
  }

  render () {
    let out = [0, 0]
    // remove dead voices first
    this.voices = this.voices.filter(voice => !voice.isFinished())
    let monoOut = this.voices.reduce((out, voice) => out + voice.render(), 0)
    let hpf
    if (this.patch.hpf < 0.3) {
      const bassBoost = this.bassBoost.render(monoOut, 0.3)
      monoOut = Math.min(Math.max(-1, bassBoost + monoOut), 1)
    } else if (this.patch.hpf > 0.59) {
      monoOut = this.hpf.render(monoOut)
    }
    out[0] = monoOut
    out[1] = monoOut
    if (this.patch.chorus) {
      out = this.chorus.render(out[0], out[1])
    }
    return [out[0] * this.patch.vca, out[1] * this.patch.vca]
  }

  setValue (path, value) {
    set(this.patch, path, value)
    this.update()
  }

  update () {
    // TODO: fix me for real time
    this.voices.forEach(voice => voice.updatePatch(this.patch))
    this.chorus.lfo.frequency = chorusModeToFreq(this.patch.chorus)
    this.chorus.feedback = chorusModeToFeedback(this.patch.chorus)
    this.chorus.delay = chorusModeToDelay(this.patch.chorus)
    this.chorus.render(0, 0)
    this.lfo.frequency = sliderToLFOFreq(this.patch.lfo.frequency)
    this.hpf.cutoff = sliderToHPF(this.patch.hpf)
    this.hpf.calculateCoeffients()
  }

  panic () {
    this.voices = []
  }

  getLatestNoteOn () {
    return this.lastNoteOn
  }
}
