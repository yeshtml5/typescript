/**
 * @title
 */
import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom'
//components
//Page
import main from 'pages/main'
import form from 'pages/form'
import markdown from './pages/module/markdown'
/*ui*/
import tab from './pages/ui/tab'
//---------------------------------------------------------------------
function Router() {
  //initalize
  //---------------------------------------------------------------------
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={main} />
        <Route exact path="/form" component={form} />
        <Route exact path="/markdown" component={markdown} />
        <Route exact path="/tab" component={tab} />
      </Switch>
    </HashRouter>
  )
}
export default Router
