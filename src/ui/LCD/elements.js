import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  width: 736px;
  height: 76px;
  background-color: #c0cf35;
  color: #2f3409;
  box-shadow: inset 0 3px 0 3px #c0cf35;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
`

export const LCDBorderTop = styled.div`
  height: 3px;
  width: 100%;
  background-color: #99a52a;
`
export const LCDBorderSide = styled.div`
  height: 100%;
  width: 3px;
  background-color: #99a52a;
  position: absolute;
  right: 0;
  top: 0;
`
