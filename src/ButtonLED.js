import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from './Button'
import Led from './Led'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  height: 100%;
`
const Label = styled.div`
  font-weight: 600;
  color: #cfcfcf;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  height: 1.25rem;
  line-height: 1.25rem;
  margin-top: 0.75rem;
`

const MarginatedLED = styled(Led)`
  margin-bottom: 0.5rem;
`

function buttonColor(color) {
  if (color === 'one') {
    return '#FEFEFC'
  } else if (color === 'two') {
    return '#FFFD76'
  } else if (color === 'three') {
    return '#FE9C5B'
  }
  return '#323232'
}
const EmptyButton = styled(Button)`
  height: ${props => (props.small ? '1.5rem' : '2rem')};
  width: ${props => (props.small ? '1.5rem' : '2.4rem')};
  background-color: ${props => buttonColor(props.color)};
`

const Spacer = styled.div`
  flex: 1;
`

ButtonLED.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string.isRequired,
  spaced: PropTypes.bool,
  toggle: PropTypes.func,
  hideLed: PropTypes.bool,
  small: PropTypes.bool
}

export default function ButtonLED({
  active,
  label,
  spaced,
  toggle,
  hideLed,
  small,
  color,
  ...props
}) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      {spaced && <Spacer />}
      {!hideLed && <MarginatedLED active={active} />}
      <EmptyButton
        onClick={() => toggle && toggle(!active)}
        small={small}
        color={color}
        {...props}
      />
      {spaced && <Spacer />}
    </Wrapper>
  )
}
