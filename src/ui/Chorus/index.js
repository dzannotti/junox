import React from 'react'
import Section from '../Section'
import ButtonLED from '../ButtonLED'

export default React.memo(function Chorus({ chorus, setValue }) {
  return (
    <Section title="Chorus">
      <ButtonLED
        label="Off"
        color="one"
        active={chorus === 0}
        toggle={setValue('chorus', 0)}
      />
      <ButtonLED
        label="I"
        color="two"
        active={chorus === 1}
        toggle={setValue('chorus', 1)}
      />
      <ButtonLED
        label="II"
        color="three"
        active={chorus === 2}
        toggle={setValue('chorus', 2)}
      />
    </Section>
  )
})
