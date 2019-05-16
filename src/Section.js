import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  margin-bottom: 3px;
  flex-grow: 0;
  flex-shrink: 0;
  height: 220px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
`

const Title = styled.div`
  width: calc(100% - 2px);
  margin-left: 1px;
  background-color: #b7081f;
  color: white;
  text-transform: uppercase;
  height: 1.3rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  justify-content: center;
`
const BottomBlock = styled.div`
  width: calc(100% - 2px);
  background-color: #b7081f;
  color: white;
  height: 0.5rem;
  display: flex;
`

const Line = styled.div`
  height: 100%;
  width: 1px;
  background-color: white;
`

const LineStart = styled(Line)`
  align-self: flex-start;
  margin-right: 10px;
`

const LineEnd = styled(Line)`
  align-self: flex-end;
  margin-left: 10px;
`

Section.propTypes = {
  title: PropTypes.string.isRequired
}

export default function Section({ title, children }) {
  return (
    <Column>
      <Title>{title}</Title>
      <Row>
        <LineStart />
        {children}
        <LineEnd />
      </Row>
      <BottomBlock />
    </Column>
  )
}
