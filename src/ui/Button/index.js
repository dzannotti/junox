import styled from 'styled-components'

function buttonColor(color) {
  if (color === 'white') {
    return '#FEFEFC'
  } else if (color === 'yellow') {
    return '#FFFD76'
  } else if (color === 'orange') {
    return '#FE9C5B'
  }
  return '#323232'
}

export const Button = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${props => buttonColor(props.variant)};
  border: 1px solid black;
  border-radius: 4px;
  font-size: 13px;
  text-transform: uppercase;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  &:active {
    background-color: #121212;
  }
`

export const FixedSizeButton = styled(Button)`
  width: 100px;
`

export const EmptyButton = styled(Button)`
  height: ${props => (props.small ? '1.5rem' : '2rem')};
  width: ${props => (props.small ? '1.5rem' : '2.4rem')};
`
