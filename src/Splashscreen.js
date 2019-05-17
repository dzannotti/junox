import React from 'react'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-width: 100%;
  min-height: 100%;
`

const Logo = styled.div`
  font-size: 45px;
  font-weight: 600;
  font-family: Righteous;
  margin-bottom: 1rem;
`

const Label = styled.div`
  margin-top: 1rem;
`

export default function SplashScreen() {
  return (
    <Container>
      <Logo>JUNOX</Logo>
      <Loader type="Triangle" color="#121212" height="100" width="100" />
      <Label>loading...</Label>
    </Container>
  )
}
