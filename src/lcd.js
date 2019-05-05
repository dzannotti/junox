import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PatchSelector from './PatchSelector'
import Visualizer from './Visualizer'

const Container = styled.div`
  width: 736px;
  height: 76px;
  background-color: #c0cf35;
  color: #2f3409;
  box-shadow: inset 0 3px 0 3px #c0cf35;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 4px;
`

LCD.propTypes = {
  patches: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPatch: PropTypes.func.isRequired
}

export default function LCD ({ patches, setPatch }) {
  return (
    <Container>
      <PatchSelector patches={patches} setPatch={setPatch} />
      <Visualizer />
    </Container>
  )
}
