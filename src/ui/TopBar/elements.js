import styled from 'styled-components'
import { Row } from '../Flexbox'

export const TopRow = styled(Row)`
  height: 120px;
  background-color: #232326;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`

export const Spacer = styled.div`
  flex: 1;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Logo = styled.div`
  font-size: 36px;
  font-weight: 600;
  font-family: Righteous;
  margin-right: 1rem;
  align-self: flex-end;
`
