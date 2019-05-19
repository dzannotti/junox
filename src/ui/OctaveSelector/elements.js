import styled from 'styled-components'
import Led from '../Led'

export const OctaveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  text-transform: uppercase;
  font-weight: 600;
  color: white;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  padding-top: 10px;
  border-right: 2px solid #121212;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`

export const MarginatedLed = styled(Led)`
  margin-left: 0.5rem;
`
