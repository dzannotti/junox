import Visualizer from './Visualizer/visualizer'
import { noteToFrequency } from './utils'
import synthWorklet from './synth.worklet'
import SynthWorkletNode from './synth.node'

export const SAMPLE_RATE = 44100

function initVisualizer (audioContext, synthNode) {
  const visualizer = new Visualizer(
    'analysis',
    256,
    35,
    0xc0cf35,
    0x2f3409,
    audioContext
  )
  synthNode.connect(visualizer.getAudioNode())
  setInterval(() => {
    if (synthNode.lastNoteOn) {
      const visualizerFrequency = noteToFrequency(synthNode.lastNoteOn)
      visualizer.setPeriod(SAMPLE_RATE / visualizerFrequency)
    }
  }, 100)
}

function unlockAudioContext (audioContext) {
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

export async function initAudio () {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)({
    sampleRate: SAMPLE_RATE
  })
  try {
    await audioContext.audioWorklet.addModule(synthWorklet)
    const synthNode = new SynthWorkletNode(audioContext, {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCountMode: 'explicit',
      channelCount: 2,
      outputChannelCount: [2]
    })
    synthNode.connect(audioContext.destination)
    unlockAudioContext(audioContext)
    setTimeout(() => initVisualizer(audioContext, synthNode), 100)
    return synthNode
  } catch (error) {
    console.log('error', error)
    throw error
  }
}
