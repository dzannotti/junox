import React from 'react'
import Section from '../Section'
import Slider from '../Slider'
import ButtonLED from '../ButtonLED'
import { Column } from '../Flexbox'

export default React.memo(function LFO({
  frequency,
  delay,
  autoTrigger,
  setValue,
  lfoTrigger,
  lfoRelease
}) {
  return (
    <Section title="LFO">
      <Slider
        label="FREQ"
        value={frequency}
        onChange={setValue('lfo.frequency')}
      />
      <Slider label="DELAY" value={delay} onChange={setValue('lfo.delay')} />
      <Column>
        <ButtonLED
          label="Auto"
          active={autoTrigger}
          toggle={setValue('lfo.autoTrigger', true)}
        />
        <ButtonLED
          label="Man"
          active={!autoTrigger}
          toggle={setValue('lfo.autoTrigger', false)}
        />
      </Column>
      <ButtonLED
        label="TRG"
        hideLed
        onMouseDown={lfoTrigger}
        onMouseUp={lfoRelease}
      />
    </Section>
  )
})
