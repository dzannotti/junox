import React, { useState } from 'react'
import styled from 'styled-components'
import AudioRecorder from './vendor/AudioRecorder'
import { saveAs } from 'filesaver.js'
import { SmallButton } from './Button'

const RedButton = styled(SmallButton)`
  color: red;
`

export default function Record({ audioContext, outNode }) {
  const [isRecording, setRecording] = useState(false)
  const [recorder] = useState(new AudioRecorder(audioContext, outNode))

  const startRecording = () => {
    recorder.start()
    setRecording(true)
  }

  const stopRecording = () => {
    recorder.stop()
    saveAs(recorder.exportWaveBlob(), 'recorded.wav')
    setRecording(false)
  }

  if (isRecording) {
    return <SmallButton onClick={stopRecording}>Stop</SmallButton>
  }
  return <RedButton onClick={startRecording}>Record</RedButton>
}
