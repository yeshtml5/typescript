import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
//contexts
import {GlobalContextProvider, PageContextProvider} from 'contexts'
//App
import App from './App'
//style
import 'static/styles/common.scss'
import 'static/styles/layout.scss'

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
