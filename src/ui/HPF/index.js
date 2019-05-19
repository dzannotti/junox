import React from 'react'
import Section from '../Section'
import Slider from '../Slider'

export default React.memo(function HPF({ hpf, setValue }) {
  return (
    <Section title="HPF">
      <Slider label="FREQ" value={hpf} step={0.33} onChange={setValue('hpf')} />
    </Section>
  )
})
