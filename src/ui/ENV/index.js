import React from 'react'
import Section from '../Section'
import Slider from '../Slider'

export default React.memo(function ENV({
  attack,
  decay,
  sustain,
  release,
  setValue
}) {
  return (
    <Section title="ENV">
      <Slider label="A" value={attack} onChange={setValue('env.attack')} />
      <Slider label="D" value={decay} onChange={setValue('env.decay')} />
      <Slider label="S" value={sustain} onChange={setValue('env.sustain')} />
      <Slider label="R" value={release} onChange={setValue('env.release')} />
    </Section>
  )
})
