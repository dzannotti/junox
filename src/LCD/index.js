import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PatchSelector from '../PatchSelector'
import { Wrapper, Container, LCDBorderSide, LCDBorderTop } from './elements'

LCD.propTypes = {
  patches: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default function LCD({ patches, setPatch, children }) {
  return (
    <Wrapper>
      <LCDBorderTop />
      <Container>
        <PatchSelector patches={patches} setPatch={setPatch} />
        {children}
        <LCDBorderSide />
      </Container>
    </Wrapper>
  )
}
