import { set } from 'lodash'
import Voice from './voice'
import Chorus from './chorus'
import LFO from './lfo'
import BassBoost from './bassboost'
import HighPassFilter from './hpf'
import {
  chorusModeToFreq,
  chorusModeToWet,
  sliderToLFOFreq,
  sliderToLFODelay,
  sliderToHPF
} from './params'
import { clampVolume } from './utils'

export default class Junox {
  constructor({ patch, sampleRate, polyphony }) {
    this.patch = patch
    this.voices = []
    this.maxVoices = polyphony
    this.patch = patch
    this.sampleRate = sampleRate
    this.chorus = new Chorus({ sampleRate, rate: 1, delay: 0.00166 })
    this.lfo = new LFO({
      frequency: sliderToLFOFreq(patch.lfo.frequency),
      delay: 0,
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

  noteOn(note, velocity) {
    const voiceIndex = this.voices.findIndex(voice => voice.note === note)
    const newVoice = new Voice({
      note,
      patch: this.patch,
      velocity,
      sampleRate: this.sampleRate
    })
    if (!this.voices.length && this.patch.lfo.autoTrigger) {
      this.lfo.trigger()
    }
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

  noteOff(note) {
    this.voices.forEach(voice => voice.note === note && voice.noteOff())
  }

  tick() {
    const canLFO = this.patch.lfo.autoTrigger || this.lfoTriggered
    const lfo = canLFO ? this.lfo.render() : 0
    const positiveLFO = lfo / 2 + 0.5
    for (let i = 0; i < this.voices.length; i++) {
      this.voices[i].tick(lfo, positiveLFO)
    }
  }

  lfoTrigger() {
    this.lfo.trigger()
    this.lfoTriggered = true
  }

  lfoRelease() {
    this.lfoTriggered = false
  }

  render(outL, outR) {
    for (let i = 0; i < outL.length; i++) {
      this.tick()
      // remove dead voices first
      this.voices = this.voices.filter(voice => !voice.isFinished())

      let monoOut = 0
      for (let j = 0; j < this.voices.length; j++) {
        monoOut += this.voices[j].render()
      }

      if (this.patch.hpf < 0.3) {
        const bassBoost = this.bassBoost.render(monoOut, 0.3)
        monoOut = clampVolume(bassBoost + monoOut)
      } else {
        monoOut = this.hpf.render(monoOut)
      }
      if (this.patch.chorus) {
        const chorus = this.chorus.render(monoOut)
        outL[i] = chorus[0]
        outR[i] = chorus[1]
      } else {
        outL[i] = monoOut
        outR[i] = monoOut
      }
      outL[i] *= this.patch.vca
      outR[i] *= this.patch.vca
    }
  }

  setValue(path, value) {
    if (path === 'chorus') {
      this.chorus.reset()
    }
    set(this.patch, path, value)
    this.update()
  }

  update() {
    // TODO: fix me for real time
    this.voices.forEach(voice => voice.updatePatch(this.patch))
    this.chorus.lfo.frequency = chorusModeToFreq(this.patch.chorus)
    this.chorus.wet = chorusModeToWet(this.patch.chorus)
    this.chorus.render(0, 0)
    this.lfo.setRate(sliderToLFOFreq(this.patch.lfo.frequency))
    this.lfo.setDelay(sliderToLFODelay(this.patch.lfo.delay))
    this.hpf.cutoff = sliderToHPF(this.patch.hpf)
    this.hpf.calculateCoeffients()
  }

  panic() {
    this.voices = []
  }
}
