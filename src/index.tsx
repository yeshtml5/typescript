import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {GlobalProvider} from 'contexts'
import App from './App'
import 'static/styles/common.scss'
import 'static/styles/layout.scss'

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
