import React from 'react'
import Section from '../Section'
import Slider from '../Slider'
import ButtonLED, { AfterButtonLED } from '../ButtonLED'
import { Column } from '../Flexbox'

export default React.memo(function DCO({
  range,
  lfo,
  pwm,
  lfoMod,
  pulse,
  saw,
  sub,
  subAmount,
  noise,
  setValue
}) {
  return (
    <Section title="DCO">
      <ButtonLED
        active={range === 2}
        label="4'"
        toggle={setValue('dco.range', 2)}
      />
      <ButtonLED
        active={range === 1}
        label="8'"
        toggle={setValue('dco.range', 1)}
      />
      <ButtonLED
        active={range === 0.5}
        label="16'"
        toggle={setValue('dco.range', 0.5)}
      />
      <AfterButtonLED />
      <Slider label="LFO" value={lfo} onChange={setValue('dco.lfo')} />
      <Slider label="PWM" value={pwm} onChange={setValue('dco.pwm')} />
      <Column>
        <ButtonLED
          active={lfoMod}
          label="LFO"
          toggle={setValue('dco.lfoMod', true)}
        />
        <ButtonLED
          active={!lfoMod}
          label="Man"
          toggle={setValue('dco.lfoMod', false)}
        />
      </Column>
      <ButtonLED
        active={pulse}
        label="PULSE"
        spaced
        toggle={setValue('dco.pulse')}
        variant="white"
      />
      <ButtonLED
        active={saw}
        label="SAW"
        spaced
        toggle={setValue('dco.saw')}
        variant="yellow"
      />
      <ButtonLED
        active={sub}
        label="SUB"
        spaced
        toggle={setValue('dco.sub')}
        variant="orange"
      />
      <AfterButtonLED />
      <Slider
        label="SUB"
        onChange={setValue('dco.subAmount')}
        value={subAmount}
      />
      <Slider label="NOISE" value={noise} onChange={setValue('dco.noise')} />
    </Section>
  )
})
