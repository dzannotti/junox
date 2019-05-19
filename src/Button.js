import styled from 'styled-components'

const Button = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  background-color: #323232;
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

export const SmallButton = styled(Button)`
  width: 100px;
`

export default Button
