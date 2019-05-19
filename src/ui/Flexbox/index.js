import styled from 'styled-components'

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SimpleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.centered ? 'center' : 'flex-start')};
  margin-top: ${props => (props.marginated ? '10px' : '0')};
`

export const Row = styled(SimpleRow)`
  display: flex;
  flex-direction: row;
  width: 1000px;
  flex: 0 0 auto;
  background-color: #2b2c2e;
  padding-bottom: ${props => (props.first ? '3px' : '0')};
`
