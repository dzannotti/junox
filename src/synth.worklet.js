import Junox from './junox'
import patches from './junox/patches'
import {
  LFO_TRIGGER_OFF,
  LFO_TRIGGER_ON,
  NOTE_OFF,
  NOTE_ON,
  PANIC,
  SET_PARAM,
  SET_PATCH,
  START_SAMPLE_TIME,
  STOP_SAMPLE_TIME
} from './synth.constants'

class JunoxWorker extends AudioWorkletProcessor {
  constructor() {
    super()
    this.synth = new Junox({
      patch: patches[0],
      sampleRate: 44100,
      polyphony: 6
    })
    this.bufferL = new Float32Array(256)
    this.bufferR = new Float32Array(256)
    this.port.onmessage = this.handleMessage.bind(this)
  }

  sendStartTime(samples) {
    this.port.postMessage({
      type: START_SAMPLE_TIME,
      samples
    })
  }

  sendStopTime() {
    this.port.postMessage({
      type: STOP_SAMPLE_TIME
    })
  }

  handleMessage(event) {
    if (event.data.action === NOTE_ON) {
      this.synth.noteOn(event.data.note, event.data.velocity)
    } else if (event.data.action === NOTE_OFF) {
      this.synth.noteOff(event.data.note)
    } else if (event.data.action === SET_PARAM) {
      this.synth.setValue(event.data.name, event.data.value)
    } else if (event.data.action === SET_PATCH) {
      this.synth.patch = patches[event.data.index]
      this.synth.update()
    } else if (event.data.action === LFO_TRIGGER_ON) {
      this.synth.lfoTrigger()
    } else if (event.data.action === LFO_TRIGGER_OFF) {
      this.synth.lfoRelease()
    } else if (event.data.action === PANIC) {
      this.synth.panic()
    } else {
      console.log('Unamanaged message', JSON.stringify(event.data))
    }
  }

  process(inputs, outputs) {
    const output = outputs[0]
    this.sendStartTime(output[0].length)
    if (output[0].length > this.bufferL.length) {
      this.bufferL = new Float32Array(output[0].length)
      this.bufferR = new Float32Array(output[0].length)
    }
    this.synth.render(output[0], output[1])
    this.sendStopTime()
    return true
  }
}

registerProcessor('junox-synth', JunoxWorker)
