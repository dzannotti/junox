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

export default class SynthWorkletNode extends AudioWorkletNode {
  constructor(context, options) {
    super(context, 'junox-synth', options)
    this.sampleTimes = []
    this.port.onmessage = this.handleMessage.bind(this)
  }

  handleMessage(event) {
    if (event.data.type === START_SAMPLE_TIME) {
      this.startTime = performance.now()
    }
    if (event.data.type === STOP_SAMPLE_TIME) {
      this.sampleTimes.push(performance.now() - this.startTime)
    }
  }

  sendMessage(action, payload) {
    this.port.postMessage({
      action,
      ...payload
    })
  }

  noteOn(note, velocity) {
    this.port.postMessage({
      action: NOTE_ON,
      note,
      velocity
    })
  }

  noteOff(note) {
    this.port.postMessage({
      action: NOTE_OFF,
      note
    })
  }

  setParam(name, value) {
    this.port.postMessage({
      action: SET_PARAM,
      name,
      value
    })
  }

  setPatch(index) {
    this.port.postMessage({
      action: SET_PATCH,
      index
    })
  }

  lfoTrigger() {
    this.port.postMessage({ action: LFO_TRIGGER_ON })
  }

  lfoRelease() {
    this.port.postMessage({ action: LFO_TRIGGER_OFF })
  }

  panic() {
    this.port.postMessage({
      action: PANIC
    })
  }

  sampleTime() {
    let average = 0
    let max = 0
    for (let i = 0; i < this.sampleTimes.length; i++) {
      if (this.sampleTimes[i] > max) {
        max = this.sampleTimes[i]
      }
      average += this.sampleTimes[i]
    }
    average = average / this.sampleTimes.length
    this.sampleTimes = []
    return [average, max]
  }
}
