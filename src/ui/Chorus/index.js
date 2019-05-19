import React from 'react'
import Section from '../Section'
import ButtonLED from '../ButtonLED'

export default React.memo(function Chorus({ chorus, setValue }) {
  return (
    <Section title="Chorus">
      <ButtonLED
        label="Off"
        variant="white"
        active={chorus === 0}
        toggle={setValue('chorus', 0)}
      />
      <ButtonLED
        label="I"
        variant="yellow"
        active={chorus === 1}
        toggle={setValue('chorus', 1)}
      />
      <ButtonLED
        label="II"
        variant="orange"
        active={chorus === 2}
        toggle={setValue('chorus', 2)}
      />
    </Section>
  )
})
