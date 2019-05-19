export default class SynthWorkletNode extends AudioWorkletNode {
  constructor(context, options) {
    super(context, 'junox-synth', options)
    this.sampleTimes = []
    this.port.onmessage = this.handleMessage.bind(this)
  }

  handleMessage(event) {
    if (event.data.type === 'start-sample-time') {
      this.startTime = performance.now()
    }
    if (event.data.type === 'stop-sample-time') {
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
      action: 'note-on',
      note,
      velocity
    })
  }

  noteOff(note) {
    this.port.postMessage({
      action: 'note-off',
      note
    })
  }

  setParam(name, value) {
    this.port.postMessage({
      action: 'set-param',
      name,
      value
    })
  }

  setPatch(index) {
    this.port.postMessage({
      action: 'set-patch',
      index
    })
  }

  lfoTrigger() {
    this.port.postMessage({ action: 'lfo-trigger-on' })
  }

  lfoRelease() {
    this.port.postMessage({ action: 'lfo-trigger-off' })
  }

  panic() {
    this.port.postMessage({
      action: 'panic'
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
