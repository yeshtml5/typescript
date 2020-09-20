import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {GlobalContextProvider, PageContextProvider} from 'contexts'
import App from './App'
import {Firebase} from 'constpack'
import 'static/styles/common.scss'
import 'static/styles/layout.scss'
//console.log(Firebase)

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
