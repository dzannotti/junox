import { set } from 'lodash'
import Voice from './voice'
import Chorus from './chorus'
import LFO from './lfo'
import BassBoost from './bassboost'
import ADSREnvelope from './envelope'
import HighPassFilter from './hpf'
import {
  chorusModeToFreq,
  chorusModeToFeedback,
  chorusModeToDelay,
  sliderToLFOFreq,
  sliderToLFODelay,
  sliderToHPF,
  sliderToTime,
  sliderToDecay,
  sliderToSustain
} from './params'

export default class Junox {
  constructor({ patch, sampleRate, polyphony }) {
    this.patch = patch
    this.voices = []
    this.maxVoices = polyphony
    this.patch = patch
    this.sampleRate = sampleRate
    this.chorus = new Chorus({ sampleRate, rate: 1 })
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
    this.vcaGate = new ADSREnvelope({
      attack: sliderToTime(0.1),
      decay: sliderToDecay(1),
      sustain: sliderToSustain(1),
      release: sliderToTime(0.1),
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
    if (this.vcaGate.state === 'release') {
      this.vcaGate.reset()
    }
    if (!this.voices.length) {
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
    if (this.voices.length === 1) {
      this.vcaGate.noteOff()
    }
  }

  tick() {
    const lfo = this.lfo.render()
    this.vcaGate.tick()
    for (let i = 0; i < this.voices.length; i++) {
      this.voices[i].tick(lfo)
    }
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
        monoOut = Math.min(Math.max(-1, bassBoost + monoOut), 1)
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
      if (this.patch.vcaType === 'gate') {
        const vcaGate = this.vcaGate.render()
        outL[i] *= vcaGate
        outR[i] *= vcaGate
      }
    }
  }

  setValue(path, value) {
    set(this.patch, path, value)
    this.update()
  }

  update() {
    // TODO: fix me for real time
    this.voices.forEach(voice => voice.updatePatch(this.patch))
    this.chorus.lfo.frequency = chorusModeToFreq(this.patch.chorus)
    this.chorus.feedback = chorusModeToFeedback(this.patch.chorus)
    this.chorus.delay = chorusModeToDelay(this.patch.chorus)
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
