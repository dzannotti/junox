import React from 'react'
import Section from '../Section'
import ButtonLED, { AfterButtonLED } from '../ButtonLED'
import Slider from '../Slider'

export default React.memo(function VCA({ vca, vcaType, setValue }) {
  return (
    <Section title="VCA">
      <ButtonLED
        label="ENV"
        active={vcaType === 'env'}
        toggle={setValue('vcaType', undefined, val => (val ? 'env' : 'gate'))}
      />
      <AfterButtonLED />
      <Slider label="level" value={vca} onChange={setValue('vca')} />
    </Section>
  )
})
