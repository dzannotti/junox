import Visualizer from './Visualizer/visualizer'
import { noteToFrequency } from './utils'

// TODO: Refactor this mess
const BUFFER_SIZE = 4096

export const SAMPLE_RATE = 44100
const MS_PER_SAMPLE = 1000 / SAMPLE_RATE
const BUFFER_SIZE_MS = (1000 * BUFFER_SIZE) / SAMPLE_RATE
const audioContext = new (window.AudioContext || window.webkitAudioContext)()

function init (synth, sequencer) {
  const visualizer = new Visualizer(
    'analysis',
    256,
    35,
    0xc0cf35,
    0x2f3409,
    audioContext
  )
  setupAudioGraph(synth, sequencer, visualizer)
  unlockAudioContext()
}

function setupAudioGraph (synth, sequencer, visualizer) {
  const scriptProcessor = audioContext.createScriptProcessor(BUFFER_SIZE, 0, 2)
  scriptProcessor.connect(audioContext.destination)
  scriptProcessor.connect(visualizer.getAudioNode())
  // Attach to window to avoid GC. http://sriku.org/blog/2013/01/30/taming-the-scriptprocessornode
  scriptProcessor.onaudioprocess = window.audioProcess = e => {
    const buffer = e.outputBuffer
    const outputL = buffer.getChannelData(0)
    const outputR = buffer.getChannelData(1)
    let sampleTime = performance.now() - BUFFER_SIZE_MS

    const lastNoteOn = synth.getLatestNoteOn()
    if (lastNoteOn) {
      const visualizerFrequency = noteToFrequency(lastNoteOn)
      visualizer.setPeriod(SAMPLE_RATE / visualizerFrequency)
    }

    for (let i = 0, length = buffer.length; i < length; i++) {
      sampleTime += MS_PER_SAMPLE
      if (
        sequencer.eventQueue.length &&
        sequencer.eventQueue[0].timeStamp < sampleTime
      ) {
        sequencer.processMidiEvent()
      }
      synth.tick()
      const output = synth.render()
      outputL[i] = output[0]
      outputR[i] = output[1]
    }
  }
}

function unlockAudioContext () {
  if (audioContext.state === 'suspended') {
    const events = ['touchstart', 'touchend', 'mousedown', 'keydown']
    const unlock = () => {
      events.forEach(function (event) {
        document.body.removeEventListener(event, unlock)
      })
      console.log('Resuming audio context...')
      audioContext.resume()
    }

    events.forEach(function (event) {
      document.body.addEventListener(event, unlock, false)
    })
  }
}

export function initAudio (synth, sequencer) {
  // give react a chance to render the viz div
  setTimeout(() => init(synth, sequencer), 50)
}
