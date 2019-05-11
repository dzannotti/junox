import 'audioworklet-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App'
import reset from 'styled-reset'
import 'react-piano/dist/styles.css'
import './piano.css'

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }  
  body {
    font-family: 'Montserrat', sans-serif;
    user-select: none;
  }
  html, body, #root {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex: 1;
    background-color: #4a4950;
    color: #BFBFBF;
  }
  body, #root {
    flex-direction: column;
  }
`

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
)
