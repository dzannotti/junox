import React from 'react'
import Section from '../Section'
import ButtonLED from '../ButtonLED'

export default React.memo(function Chorus({ chorus, setValue }) {
  return (
    <Section title="Chorus">
      <ButtonLED
        active={chorus === 0}
        label="Off"
        toggle={setValue('chorus', 0)}
        variant="white"
      />
      <ButtonLED
        active={chorus === 1}
        label="I"
        toggle={setValue('chorus', 1)}
        variant="yellow"
      />
      <ButtonLED
        active={chorus === 2}
        label="II"
        toggle={setValue('chorus', 2)}
        variant="orange"
      />
    </Section>
  )
})
