import React from 'react'
import styled from 'styled-components'
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano'
import Led from './Led'
import Button from './Button'

const OctaveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  text-transform: uppercase;
  font-weight: 600;
  color: white;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  padding-top: 15px;
  border-right: 2px solid #121212;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

const MarginatedLED = styled(Led)`
  margin-left: 0.5rem;
`

export function PianoOctaveSelector({ octave, setOctave, children }) {
  const clamp = v => Math.max(-24, Math.min(v, 24))
  const changeOctave = direction => v =>
    setOctave(clamp(octave + 12 * direction))
  return (
    <OctaveWrapper>
      Octave
      <Row>
        <Led active={octave === -24} />
        <MarginatedLED active={octave === -12} />
        <MarginatedLED active={octave === 0} />
        <MarginatedLED active={octave === 12} />
        <MarginatedLED active={octave === 24} />
      </Row>
      <Row>
        <Button onClick={changeOctave(-1)}>&lt;</Button>
        <Button style={{ marginLeft: '0.5rem' }} onClick={changeOctave(1)}>
          &gt;
        </Button>
      </Row>
      <Column>{children}</Column>
    </OctaveWrapper>
  )
}

export default function PianoWrapper({ noteOn, noteOff, octave }) {
  const firstNote = MidiNumbers.fromNote('c3')
  const lastNote = MidiNumbers.fromNote('c5')
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: [
      ...KeyboardShortcuts.BOTTOM_ROW,
      ...KeyboardShortcuts.QWERTY_ROW
    ]
  })
  return (
    <Piano
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={note => noteOn(note + octave)}
      stopNote={note => noteOff(note + octave)}
      width={850}
      keyboardShortcuts={keyboardShortcuts}
    />
  )
}
