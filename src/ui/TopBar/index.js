import React from 'react'
import LCD from '../LCD'
import PatchSelector from '../PatchSelector'
import Visualizer from '../Visualizer'
import MIDIController from '../MIDIController'
import { SimpleRow } from '../Flexbox'
import Record from '../Record'
import { FixedSizeButton } from '../Button'
import { AfterButtonLED } from '../ButtonLED'
import CpuUsage from '../CPUUsage'
import { TopRow, Spacer, LogoContainer, Logo } from './elements'
import { noteToFrequency } from '../../utils'

export default function TopBar({
  audioContext,
  lastNoteOn,
  noteOff,
  noteOn,
  patches,
  setPatch,
  synth
}) {
  return (
    <TopRow>
      <LCD>
        <PatchSelector patches={patches} setPatch={setPatch} />
        <Visualizer
          audioContext={audioContext}
          outNode={synth}
          period={noteToFrequency(lastNoteOn)}
          sampleRate={44100}
        />
      </LCD>
      <Spacer />
      <LogoContainer>
        <Logo>JUNOX</Logo>
        <MIDIController noteOn={noteOn} noteOff={noteOff} />
        <SimpleRow centered marginated>
          <FixedSizeButton onClick={() => synth.panic()}>Panic</FixedSizeButton>
          <AfterButtonLED />
          <Record audioContext={audioContext} outNode={synth} />
        </SimpleRow>
        <CpuUsage synth={synth} />
      </LogoContainer>
    </TopRow>
  )
}
