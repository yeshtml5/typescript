import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
//contexts
import {GlobalContextProvider} from 'contexts/global'
import {PageContextProvider} from 'contexts/page'
//App
import App from './App'
//style
import './styles/common.scss'
import './styles/layout.scss'
//---------------------------------------------------------------------
ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <GlobalContextProvider>
      <PageContextProvider>
        <App />
      </PageContextProvider>
    </GlobalContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
