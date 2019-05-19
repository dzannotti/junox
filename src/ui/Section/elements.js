import styled from 'styled-components'

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  flex-grow: 0;
  flex-shrink: 0;
  height: 230px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
`

export const Title = styled.div`
  width: calc(100% - 2px);
  margin-left: 1px;
  background-color: #a40000;
  color: white;
  text-transform: uppercase;
  height: 1.7rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  justify-content: center;
`

export const BottomBlock = styled.div`
  width: calc(100% - 2px);
  background-color: #a40000;
  color: white;
  height: 0.5rem;
  display: flex;
`

export const Line = styled.div`
  height: 100%;
  width: 1px;
  background-color: white;
`

export const LineStart = styled(Line)`
  align-self: flex-start;
  margin-right: 10px;
`

export const LineEnd = styled(Line)`
  align-self: flex-end;
  margin-left: 10px;
`
