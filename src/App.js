import React, { useState } from 'react'
import styled from 'styled-components'
import LCD from './lcd'
import MIDIController from './MIDIController'
import { initAudio, SAMPLE_RATE } from './audio'
import Piano, { PianoOctaveSelector } from './Piano'
import Junox from './junox'
import Sequencer from './sequencer'
import Section from './Section'
import Slider from './Slider'
import ButtonLED from './ButtonLED'
import Button from './Button'
import patches from './junox/patches'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  min-width: 100%;
  min-height: 100%;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
  flex: 0 0 auto;
  background-color: #313036;
  justify-content: ${props => (props.centered ? 'center' : 'flex-start')};
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
  font-size: 32px;
  font-weight: 600;
  font-family: Righteous;
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

const synth = new Junox({
  sampleRate: SAMPLE_RATE,
  patch: patches[0],
  polyphony: 6
})

window.synth = synth

const sequencer = new Sequencer({ synth })

initAudio(synth, sequencer)

export default function App() {
  // force update on synth param set
  const [counter, setCounter] = useState(0)
  const [octave, setOctave] = useState(-12)
  const inc = () => setCounter(counter + 1)

  const setSynthValue = (name, forceValue) => value => {
    synth.setValue(name, forceValue != null ? forceValue : value)
    inc()
  }

  const setPatch = patch => {
    synth.patch = patch
    synth.update()
    inc()
  }
  const patch = synth.patch

  return (
    <Container>
      <TopRow>
        <LCD patches={patches} setPatch={setPatch} />
        <Spacer />
        <LogoContainer>
          <Logo>JUNOX</Logo>
          <MIDIController sequencer={sequencer} />
        </LogoContainer>
      </TopRow>
      <Row>
        <Section title='LFO'>
          <Slider
            label='FREQ'
            value={patch.lfo.frequency}
            onChange={setSynthValue('lfo.frequency')}
          />
        </Section>
        <Section title='DCO'>
          <Slider
            label='LFO'
            value={patch.dco.lfo}
            onChange={setSynthValue('dco.lfo')}
          />
          <Slider
            label='PWM'
            value={patch.dco.pwm}
            onChange={setSynthValue('dco.pwm')}
          />
          <ButtonLED
            label='LFO MOD'
            active={patch.dco.lfoMod}
            toggle={setSynthValue('dco.lfoMod')}
          />
          <ButtonLED
            label='PULSE'
            spaced
            active={patch.dco.pulse}
            toggle={setSynthValue('dco.pulse')}
          />
          <ButtonLED
            label='SAW'
            spaced
            active={patch.dco.saw}
            toggle={setSynthValue('dco.saw')}
          />
          <AfterButtonLED />
          <Slider
            label='SUB'
            value={patch.dco.sub}
            onChange={setSynthValue('dco.sub')}
          />
          <Slider
            label='NOISE'
            value={patch.dco.noise}
            onChange={setSynthValue('dco.noise')}
          />
        </Section>
        <Section title='ENV'>
          <Slider
            label='A'
            value={patch.env.attack}
            onChange={setSynthValue('env.attack')}
          />
          <Slider
            label='D'
            value={patch.env.decay}
            onChange={setSynthValue('env.decay')}
          />
          <Slider
            label='S'
            value={patch.env.sustain}
            onChange={setSynthValue('env.sustain')}
          />
          <Slider
            label='R'
            value={patch.env.release}
            onChange={setSynthValue('env.release')}
          />
        </Section>
      </Row>
      <Row centered>
        <Section title='HPF'>
          <Slider
            label='FREQ'
            value={patch.hpf}
            step={0.33}
            onChange={setSynthValue('hpf')}
          />
        </Section>
        <Section title='VCF'>
          <Slider
            label='FREQ'
            value={patch.vcf.frequency}
            onChange={setSynthValue('vcf.frequency')}
          />
          <Slider
            label='RES'
            value={patch.vcf.resonance}
            onChange={setSynthValue('vcf.resonance')}
          />
          <ButtonLED
            label='+'
            active={patch.vcf.modPositive}
            toggle={setSynthValue('vcf.modPositive')}
          />
          <AfterButtonLED />
          <Slider
            label='ENV'
            value={patch.vcf.envMod}
            onChange={setSynthValue('vcf.envMod')}
          />
          <Slider
            label='LFO'
            value={patch.vcf.lfoMod}
            onChange={setSynthValue('vcf.lfoMod')}
          />
          <Slider
            label='KEY'
            value={patch.vcf.keyMod}
            onChange={setSynthValue('vcf.keyMod')}
          />
        </Section>
        <Section title='VCA'>
          <AfterButtonLED />
          <Slider
            label='level'
            value={patch.vca}
            onChange={setSynthValue('vca')}
          />
        </Section>
        <Section title='Chorus'>
          <ButtonLED
            label='Off'
            active={patch.chorus === 0}
            toggle={setSynthValue('chorus', 0)}
          />
          <ButtonLED
            label='I'
            active={patch.chorus === 1}
            toggle={setSynthValue('chorus', 1)}
          />
          <ButtonLED
            label='II'
            active={patch.chorus === 2}
            toggle={setSynthValue('chorus', 2)}
          />
        </Section>
      </Row>
      <BlackRow />
      <Row>
        <PianoOctaveSelector octave={octave} setOctave={setOctave}>
          <Button onClick={() => synth.panic()}>Panic</Button>
          <Button onClick={() => console.log(JSON.stringify(synth.patch))}>
            dump
          </Button>
        </PianoOctaveSelector>
        <Piano
          octave={octave}
          noteOn={note => synth.noteOn(note, 0.8)}
          noteOff={note => synth.noteOff(note)}
        />
      </Row>
      <Copyright>Copyright d.zannotti@me.com - 2019</Copyright>
    </Container>
  )
}
