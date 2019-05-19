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
        label="4'"
        active={range === 2}
        toggle={setValue('dco.range', 2)}
      />
      <ButtonLED
        label="8'"
        active={range === 1}
        toggle={setValue('dco.range', 1)}
      />
      <ButtonLED
        label="16'"
        active={range === 0.5}
        toggle={setValue('dco.range', 0.5)}
      />
      <AfterButtonLED />
      <Slider label="LFO" value={lfo} onChange={setValue('dco.lfo')} />
      <Slider label="PWM" value={pwm} onChange={setValue('dco.pwm')} />
      <Column>
        <ButtonLED
          label="LFO"
          active={lfoMod}
          toggle={setValue('dco.lfoMod', true)}
        />
        <ButtonLED
          label="Man"
          active={!lfoMod}
          toggle={setValue('dco.lfoMod', false)}
        />
      </Column>
      <ButtonLED
        label="PULSE"
        spaced
        color="one"
        active={pulse}
        toggle={setValue('dco.pulse')}
      />
      <ButtonLED
        label="SAW"
        spaced
        color="two"
        active={saw}
        toggle={setValue('dco.saw')}
      />
      <ButtonLED
        label="SUB"
        spaced
        color="three"
        active={sub}
        toggle={setValue('dco.sub')}
      />
      <AfterButtonLED />
      <Slider
        label="SUB"
        value={subAmount}
        onChange={setValue('dco.subAmount')}
      />
      <Slider label="NOISE" value={noise} onChange={setValue('dco.noise')} />
    </Section>
  )
})
