import React from 'react'
import { Range, Direction } from 'react-range'
import { Container, SliderTrackRange, SliderThumb } from './elements'

export default React.memo(function Slider({ label, value, onChange, step }) {
  const resolution = 127
  const setValue = values => onChange(parseFloat(values[0]) / resolution)
  return (
    <Container>
      <Range
        values={[Math.round(value * 127)]}
        onChange={setValue}
        min={0}
        max={resolution}
        step={step * resolution || 1}
        direction={Direction.Up}
        renderTrack={({ props, children }) => (
          <SliderTrackRange props={props} label={label}>
            {children}
          </SliderTrackRange>
        )}
        renderThumb={({ props }) => <SliderThumb {...props} />}
      />
    </Container>
  )
})
