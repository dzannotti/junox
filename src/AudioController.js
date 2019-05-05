import React from 'react'
import PropTypes from 'prop-types'
import Visualizer from './Visualizer/visualizer'
import { noteToFrequency } from './utils'

// TODO: Refactor this mess
const BUFFER_SIZE = /iPad|iPhone|iPod|Android/.test(navigator.userAgent)
  ? 4096
  : 1024

export const SAMPLE_RATE = 44100
const MS_PER_SAMPLE = 1000 / SAMPLE_RATE
const BUFFER_SIZE_MS = (1000 * BUFFER_SIZE) / SAMPLE_RATE

export default class AudioController extends React.Component {
  static propTypes = {
    synth: PropTypes.object.isRequired,
    audioContext: PropTypes.object.isRequired,
    sequencer: PropTypes.object.isRequired
  }

  componentDidMount () {
    // allow 1 render so that <div id='analysis' /> exists
    setTimeout(() => this.init(), 50)
  }

  init () {
    this.visualizer = new Visualizer(
      'analysis',
      256,
      35,
      0xc0cf35,
      0x2f3409,
      this.props.audioContext
    )
    this.setupAudioGraph()
    this.unlockAudioContext()
  }

  setupAudioGraph () {
    const scriptProcessor = this.props.audioContext.createScriptProcessor(
      BUFFER_SIZE,
      0,
      2
    )
    scriptProcessor.connect(this.props.audioContext.destination)
    scriptProcessor.connect(this.visualizer.getAudioNode())
    // Attach to window to avoid GC. http://sriku.org/blog/2013/01/30/taming-the-scriptprocessornode
    scriptProcessor.onaudioprocess = window.audioProcess = e => {
      const buffer = e.outputBuffer
      const outputL = buffer.getChannelData(0)
      const outputR = buffer.getChannelData(1)
      let sampleTime = performance.now() - BUFFER_SIZE_MS

      const lastNoteOn = this.props.synth.getLatestNoteOn()
      if (lastNoteOn) {
        const visualizerFrequency = noteToFrequency(lastNoteOn)
        this.visualizer.setPeriod(SAMPLE_RATE / visualizerFrequency)
      }

      for (let i = 0, length = buffer.length; i < length; i++) {
        sampleTime += MS_PER_SAMPLE
        if (
          this.props.sequencer.eventQueue.length &&
          this.props.sequencer.eventQueue[0].timeStamp < sampleTime
        ) {
          this.props.sequencer.processMidiEvent()
        }
        this.props.synth.tick()
        const output = this.props.synth.render()
        outputL[i] = output[0]
        outputR[i] = output[1]
      }
    }
  }

  unlockAudioContext () {
    if (this.props.audioContext.state === 'suspended') {
      const events = ['touchstart', 'touchend', 'mousedown', 'keydown']
      const unlock = () => {
        events.forEach(function (event) {
          document.body.removeEventListener(event, unlock)
        })
        console.log('Resuming audio context...')
        this.props.audioContext.resume()
      }

      events.forEach(function (event) {
        document.body.addEventListener(event, unlock, false)
      })
    }
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return null
  }
}
