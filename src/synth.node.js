export default class SynthWorkletNode extends AudioWorkletNode {
  constructor(context, options) {
    super(context, 'junox-synth', options)
    this.port.onmessage = this.handleMessage.bind(this)
  }

  handleMessage(event) {
    console.log('[Node:handleMessage] ' + event.data.message)
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
}
