import styled from 'styled-components'
import { Row } from '../Flexbox'

export const BlackRow = styled(Row)`
  background-color: #121212;
  height: 14px;
  width: 1000px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-width: 100%;
  min-height: 100%;
`

export const Copyright = styled.div`
  font-size: 12px;
  align-self: center;
  justify-self: center;
  margin-top: 0.25rem;
`
