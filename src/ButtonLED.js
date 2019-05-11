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
  margin-left: 0.75rem;
  height: 100%;
`
const Label = styled.div`
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  height: 1.25rem;
  line-height: 1.25rem;
  margin-top: 0.75rem;
`

const MarginatedLED = styled(Led)`
  margin-bottom: 0.5rem;
`

const EmptyButton = styled(Button)`
  height: 2rem;
`

const Spacer = styled.div`
  flex: 1;
`

ButtonLED.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string.isRequired,
  spaced: PropTypes.bool,
  toggle: PropTypes.func.isRequired
}

export default function ButtonLED ({ active, label, spaced, toggle }) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      {spaced && <Spacer />}
      <MarginatedLED active={active} />
      <EmptyButton onClick={() => toggle(!active)} />
      {spaced && <Spacer />}
    </Wrapper>
  )
}
