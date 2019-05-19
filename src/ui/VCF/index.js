import React from 'react'
import Section from '../Section'
import Slider from '../Slider'
import { Column } from '../Flexbox'
import ButtonLED, { AfterButtonLED } from '../ButtonLED'

export default React.memo(function VCF({
  frequency,
  resonance,
  modPositive,
  type,
  envMod,
  lfoMod,
  keyMod,
  setValue
}) {
  return (
    <Section title="VCF">
      <Slider
        label="FREQ"
        value={frequency}
        onChange={setValue('vcf.frequency')}
      />
      <Slider
        label="RES"
        value={resonance}
        onChange={setValue('vcf.resonance')}
      />
      <Column>
        <ButtonLED
          label="+"
          active={modPositive}
          toggle={setValue('vcf.modPositive')}
        />
        <ButtonLED
          label="moog"
          active={type === 'moog'}
          toggle={setValue('vcf.type', undefined, val =>
            val ? 'moog' : 'diode-ladder'
          )}
        />
      </Column>
      <AfterButtonLED />
      <Slider label="ENV" value={envMod} onChange={setValue('vcf.envMod')} />
      <Slider label="LFO" value={lfoMod} onChange={setValue('vcf.lfoMod')} />
      <Slider label="KEY" value={keyMod} onChange={setValue('vcf.keyMod')} />
    </Section>
  )
})
