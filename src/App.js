import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import copy from 'copy-to-clipboard'
import LZ from 'lz-string'
import { get } from 'lodash'
import LCD from './LCD'
import MIDIController from './MIDIController'
import Piano, { PianoOctaveSelector } from './Piano'
import Section from './Section'
import Slider from './Slider'
import ButtonLED from './ButtonLED'
import Button from './Button'
import Visualizer from './Visualizer'
import { set } from 'lodash'
import patches from './junox/patches'
import { noteToFrequency } from './utils'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-width: 100%;
  min-height: 100%;
`

const SimpleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.centered ? 'center' : 'flex-start')};
  margin-top: ${props => (props.marginated ? '10px' : '0')};
`

const Row = styled(SimpleRow)`
  display: flex;
  flex-direction: row;
  width: 1000px;
  flex: 0 0 auto;
  background-color: #313036;
`

const BlackRow = styled.div`
  background-color: #121212;
  height: 14px;
  width: 1000px;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Logo = styled.div`
  font-size: 36px;
  font-weight: 600;
  font-family: Righteous;
  margin-right: 1rem;
`

const Spacer = styled.div`
  flex: 1;
`

const TopRow = styled(Row)`
  height: 120px;
  background-color: #232326;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`

const Copyright = styled.div`
  font-size: 12px;
  align-self: center;
  justify-self: center;
  margin-top: 0.25rem;
`

const AfterButtonLED = styled.div`
  width: 20px;
  height: 100%;
`

export default function App({ synth, audioContext }) {
  const [octave, setOctave] = useState(-12)
  const [patch, setPatchValues] = useState(patches[0])
  const [lastNoteOn, setLastNoteOn] = useState(69)

  useEffect(() => {
    if (!window.location.hash) {
      return
    }
    const patchJSON = JSON.parse(
      LZ.decompressFromBase64(window.location.hash.slice(1))
    )
    const nested = ['lfo', 'env', 'dco', 'vcf']
    const paths = Object.keys(patchJSON).filter(key => !nested.includes(key))
    const allPaths = paths
      .concat(
        nested.map(nestedKey =>
          Object.keys(patchJSON[nestedKey]).map(key => `${nestedKey}.${key}`)
        )
      )
      .reduce((out, current) => {
        if (Array.isArray(current)) {
          return out.concat(current)
        }
        out.push(current)
        return out
      }, [])
    allPaths.forEach(path => setSynthPatchValue(path, get(patchJSON, path)))
  })

  const setSynthPatchValue = (name, value) => {
    synth.setParam(name, value)
    setPatchValues(patch => {
      set(patch, name, value)
      return { ...patch }
    })
  }

  const setSynthValue = (name, forceValue) => value => {
    const paramValue = forceValue != null ? forceValue : value
    setSynthPatchValue(name, paramValue)
  }

  const noteOn = (note, velocity = 0.8) => {
    synth.noteOn(note, velocity)
    setLastNoteOn(note)
  }
  const noteOff = note => synth.noteOff(note)

  const setPatch = patchIndex => {
    synth.setPatch(patchIndex)
    setPatchValues(patches[patchIndex])
  }

  const sharePatch = () => {
    const patchBase64 = LZ.compressToBase64(JSON.stringify(patch))
    window.location.hash = patchBase64
    copy(window.location.href)
    alert('Copied to clipboard')
  }

  return (
    <Container>
      <TopRow>
        <LCD patches={patches} setPatch={setPatch}>
          <Visualizer
            sampleRate={44100}
            period={noteToFrequency(lastNoteOn)}
            outNode={synth}
            audioContext={audioContext}
          />
        </LCD>
        <Spacer />
        <LogoContainer>
          <Logo>JUNOX</Logo>
          <MIDIController noteOn={noteOn} noteOff={noteOff} />
        </LogoContainer>
      </TopRow>
      <Row>
        <Section title="LFO">
          <Slider
            label="FREQ"
            value={patch.lfo.frequency}
            onChange={setSynthValue('lfo.frequency')}
          />
          <Slider
            label="DELAY"
            value={patch.lfo.delay}
            onChange={setSynthValue('lfo.delay')}
          />
        </Section>
        <Section title="DCO">
          <Slider
            label="LFO"
            value={patch.dco.lfo}
            onChange={setSynthValue('dco.lfo')}
          />
          <Slider
            label="PWM"
            value={patch.dco.pwm}
            onChange={setSynthValue('dco.pwm')}
          />
          <ButtonLED
            label="LFO MOD"
            active={patch.dco.lfoMod}
            toggle={setSynthValue('dco.lfoMod')}
          />
          <ButtonLED
            label="PULSE"
            spaced
            active={patch.dco.pulse}
            toggle={setSynthValue('dco.pulse')}
          />
          <ButtonLED
            label="SAW"
            spaced
            active={patch.dco.saw}
            toggle={setSynthValue('dco.saw')}
          />
          <AfterButtonLED />
          <Slider
            label="SUB"
            value={patch.dco.sub}
            onChange={setSynthValue('dco.sub')}
          />
          <Slider
            label="NOISE"
            value={patch.dco.noise}
            onChange={setSynthValue('dco.noise')}
          />
        </Section>
        <Section title="ENV">
          <Slider
            label="A"
            value={patch.env.attack}
            onChange={setSynthValue('env.attack')}
          />
          <Slider
            label="D"
            value={patch.env.decay}
            onChange={setSynthValue('env.decay')}
          />
          <Slider
            label="S"
            value={patch.env.sustain}
            onChange={setSynthValue('env.sustain')}
          />
          <Slider
            label="R"
            value={patch.env.release}
            onChange={setSynthValue('env.release')}
          />
        </Section>
      </Row>
      <Row centered>
        <Section title="HPF">
          <Slider
            label="FREQ"
            value={patch.hpf}
            step={0.33}
            onChange={setSynthValue('hpf')}
          />
        </Section>
        <Section title="VCF">
          <Slider
            label="FREQ"
            value={patch.vcf.frequency}
            onChange={setSynthValue('vcf.frequency')}
          />
          <Slider
            label="RES"
            value={patch.vcf.resonance}
            onChange={setSynthValue('vcf.resonance')}
          />
          <ButtonLED
            label="+"
            active={patch.vcf.modPositive}
            toggle={setSynthValue('vcf.modPositive')}
          />
          <AfterButtonLED />
          <Slider
            label="ENV"
            value={patch.vcf.envMod}
            onChange={setSynthValue('vcf.envMod')}
          />
          <Slider
            label="LFO"
            value={patch.vcf.lfoMod}
            onChange={setSynthValue('vcf.lfoMod')}
          />
          <Slider
            label="KEY"
            value={patch.vcf.keyMod}
            onChange={setSynthValue('vcf.keyMod')}
          />
        </Section>
        <Section title="VCA">
          <ButtonLED
            label="ENV"
            active={patch.vcaType === 'env'}
            toggle={setSynthValue('vcaType', 'env')}
          />
          <ButtonLED
            label="GATE"
            active={patch.vcaType === 'gate'}
            toggle={setSynthValue('vcaType', 'gate')}
          />
          <AfterButtonLED />
          <Slider
            label="level"
            value={patch.vca}
            onChange={setSynthValue('vca')}
          />
        </Section>
        <Section title="Chorus">
          <ButtonLED
            label="Off"
            active={patch.chorus === 0}
            toggle={setSynthValue('chorus', 0)}
          />
          <ButtonLED
            label="I"
            active={patch.chorus === 1}
            toggle={setSynthValue('chorus', 1)}
          />
          <ButtonLED
            label="II"
            active={patch.chorus === 2}
            toggle={setSynthValue('chorus', 2)}
          />
        </Section>
      </Row>
      <BlackRow />
      <Row>
        <PianoOctaveSelector octave={octave} setOctave={setOctave}>
          <SimpleRow centered>
            <Button onClick={() => synth.panic()}>Panic</Button>
            <Button onClick={() => console.log(JSON.stringify(patch))}>
              dump
            </Button>
          </SimpleRow>
          <SimpleRow centered marginated>
            <Button onClick={sharePatch}>SHARE PATCH</Button>
          </SimpleRow>
          <SimpleRow centered marginated />
        </PianoOctaveSelector>
        <Piano octave={octave} noteOn={noteOn} noteOff={noteOff} />
      </Row>
      <Copyright>
        Chrome 66+ ONLY - Copyright d.zannotti@me.com - 2019
      </Copyright>
    </Container>
  )
}
