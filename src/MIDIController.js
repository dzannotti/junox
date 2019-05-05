import React from 'react'
import PropTypes from 'prop-types'

// TODO: should this be a React component at all???
// TODO: can this be done with hooks?

export default class MidiController extends React.Component {
  static propTypes = {
    sequencer: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.midiStarted = this.midiStarted.bind(this)
    this.midiSystemError = this.midiSystemError.bind(this)
    this.midiMessageReceived = this.midiMessageReceived.bind(this)
  }

  componentDidMount () {
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then(this.midiStarted, this.midiSystemError)
    }
  }

  // TODO: Fix this with a midi dropdown selector
  midiStarted (midiAccess) {
    let midiIn = null
    let inputs = midiAccess.inputs.values()
    for (
      let input = inputs.next();
      input && !input.done;
      input = inputs.next()
    ) {
      input = input.value
      const name = input.name.toString().toLowerCase()
      const isPreferred =
        (!midiIn && name.includes('mpk')) ||
        name.includes('lpk') ||
        name.includes('key') ||
        name.includes('midi')
      if (isPreferred) {
        midiIn = input
        midiIn.onmidimessage = this.midiMessageReceived
      }
    }
    if (!midiIn) {
      console.log('no midi input available?')
    }
  }

  midiSystemError (err) {
    // TODO: surface this one better?
    console.log('MIDI not initialized - error encountered:' + err.code)
  }

  midiMessageReceived (event) {
    this.props.sequencer.queueMidiEvent(event)
  }

  render () {
    return null
  }
}
