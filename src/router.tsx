/**
 * @title
 */
import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom'
//components
//Page
import main from 'pages/main'
import form from 'pages/form'
import markdown from 'pages/modules/markdown'
import todo from 'pages/modules/todo'
import login from 'pages/login'
//guide
import guide from 'pages/guide'
import hooks from 'pages/guide/hooks'
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
        <Route exact path="/todo" component={todo} />
        <Route exact path="/form" component={form} />
        <Route exact path="/markdown" component={markdown} />
        <Route exact path="/tab" component={tab} />
        <Route exact path="/login" component={login} />
        {/* 가이드 */}
        <Route exact path="/guide" component={guide} />
        <Route exact path="/guide/:id" component={guide} />

        <Route exact path="/hooks" component={hooks} />
      </Switch>
    </HashRouter>
  )
}
export default Router
