import React, { useState } from 'react'
import Piano from '../Piano'
import OctaveSelector from '../OctaveSelector'
import { Button } from '../Button'
import LFO from '../LFO'
import DCO from '../DCO'
import TopBar from '../TopBar'
import { Column, Row } from '../Flexbox'
import patches from '../../junox/patches'
import usePatchUrl from './usePatchUrl'
import useSynth from './useSynth'
import HPF from '../HPF'
import VCF from '../VCF'
import VCA from '../VCA'
import ENV from '../ENV'
import Chorus from '../Chorus'
import SharePatch from '../SharePatch'
import { BlackRow, Container, Copyright } from './elements'

export default function App({ synth, audioContext }) {
  const [octave, setOctave] = useState(-12)
  const [lastNoteOn, setLastNoteOn] = useState(69)

  const {
    setSynthValue,
    setSynthPatchValue,
    patch,
    noteOn,
    noteOff,
    setPatch,
    lfoTrigger,
    lfoRelease
  } = useSynth(synth, setLastNoteOn)

  usePatchUrl(setSynthPatchValue)

  return (
    <Container>
      <TopBar
        patches={patches}
        setPatch={setPatch}
        lastNoteOn={lastNoteOn}
        synth={synth}
        audioContext={audioContext}
        noteOn={noteOn}
        noteOff={noteOff}
      />
      <Row first centered>
        <LFO
          frequency={patch.lfo.frequency}
          delay={patch.lfo.delay}
          autoTrigger={patch.lfo.autoTrigger}
          setValue={setSynthValue}
          lfoTrigger={lfoTrigger}
          lfoRelease={lfoRelease}
        />
        <DCO
          range={patch.dco.range}
          lfo={patch.dco.lfo}
          pwm={patch.dco.pwm}
          lfoMod={patch.dco.lfoMod}
          pulse={patch.dco.pulse}
          saw={patch.dco.saw}
          sub={patch.dco.sub}
          subAmount={patch.dco.subAmount}
          noise={patch.dco.noise}
          setValue={setSynthValue}
        />
        <HPF hpf={patch.hpf} setValue={setSynthValue} />
      </Row>
      <Row centered>
        <VCF
          frequency={patch.vcf.frequency}
          resonance={patch.vcf.resonance}
          modPositive={patch.vcf.modPositive}
          type={patch.vcf.type}
          envMod={patch.vcf.envMod}
          lfoMod={patch.vcf.lfoMod}
          keyMod={patch.vcf.lfoMod}
          setValue={setSynthValue}
        />
        <VCA vca={patch.vca} vcaType={patch.vcaType} setValue={setSynthValue} />
        <ENV
          attack={patch.env.attack}
          decay={patch.env.decay}
          sustain={patch.env.sustain}
          release={patch.env.release}
          setValue={setSynthValue}
        />
        <Chorus chorus={patch.chorus} setValue={setSynthValue} />
      </Row>
      <BlackRow />
      <Row>
        <Column style={{ height: 175 }}>
          <OctaveSelector octave={octave} setOctave={setOctave} />
          <Button
            style={{ marginTop: 10 }}
            onClick={() => console.log(JSON.stringify(patch))}
          >
            dump
          </Button>
          <SharePatch patch={patch} />
        </Column>
        <Piano octave={octave} noteOn={noteOn} noteOff={noteOff} />
      </Row>
      <Copyright>
        Chrome 66+ ONLY - Copyright d.zannotti@me.com - 2019
      </Copyright>
    </Container>
  )
}
