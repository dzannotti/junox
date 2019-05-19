import styled from 'styled-components'
import LedLight from '../Led'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  height: 100%;
`

export const Label = styled.div`
  font-weight: 600;
  color: #cfcfcf;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  height: 1.25rem;
  line-height: 1.25rem;
  margin-top: 0.75rem;
`

export const Led = styled(LedLight)`
  margin-bottom: 0.5rem;
`

export const Spacer = styled.div`
  flex: 1;
`

export const AfterButtonLED = styled.div`
  width: 20px;
  height: 100%;
`
