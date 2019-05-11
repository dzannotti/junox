import Junox from './junox'
import patches from './junox/patches'

class JunoxWorker extends AudioWorkletProcessor {
  constructor () {
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

  handleMessage (event) {
    if (event.data.action === 'note-on') {
      this.synth.noteOn(event.data.note, event.data.velocity)
    } else if (event.data.action === 'note-off') {
      this.synth.noteOff(event.data.note)
    } else if (event.data.action === 'set-param') {
      this.synth.setValue(event.data.name, event.data.value)
    } else if (event.data.action === 'set-patch') {
      this.synth.patch = patches[event.data.index]
      this.synth.update()
    } else if (event.data.action === 'panic') {
      this.synth.panic()
    } else {
      console.log('Unamanaged message', JSON.stringify(event.data))
    }
  }

  process (inputs, outputs) {
    const output = outputs[0]
    if (output[0].length > this.bufferL.length) {
      this.bufferL = new Float32Array(output[0].length)
      this.bufferR = new Float32Array(output[0].length)
    }
    this.synth.render(output[0], output[1])
    return true
  }
}

registerProcessor('junox-synth', JunoxWorker)
