import React from 'react'
import { Range, Direction } from 'react-range'
import { Container, SliderTrackRange, SliderThumb } from './elements'

export default React.memo(function Slider({ label, value, onChange, step }) {
  const resolution = 127
  const setValue = values => onChange(parseFloat(values[0]) / resolution)
  return (
    <Container>
      <Range
        direction={Direction.Up}
        max={resolution}
        min={0}
        onChange={setValue}
        step={step * resolution || 1}
        renderTrack={({ props, children }) => (
          <SliderTrackRange props={props} label={label}>
            {children}
          </SliderTrackRange>
        )}
        renderThumb={({ props }) => <SliderThumb {...props} />}
        values={[Math.round(value * 127)]}
      />
    </Container>
  )
})
