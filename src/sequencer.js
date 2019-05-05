export default class Sequencer {
  constructor ({ synth }) {
    this.eventQueue = []
    this.synth = synth
  }

  queueMidiEvent = function (ev) {
    this.eventQueue.push(ev)
  }

  processMidiEvent () {
    const event = this.eventQueue.shift()
    const cmd = event.data[0] >> 4
    const note = event.data[1]
    const velocity = event.data[2]
    // with MIDI, note on with velocity zero is the same as note off
    if (cmd === 8 || (cmd === 9 && velocity === 0)) {
      this.synth.noteOff(note)
    } else if (cmd === 9) {
      this.synth.noteOn(note, velocity / 127)
    }
  }
}
