import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {GlobalContextProvider} from 'contexts/global'
//App
import App from './App'
//style
import './styles/common.scss'
import './styles/layout.scss'
//Context
// import {GlobalProvider} from './context/'

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
