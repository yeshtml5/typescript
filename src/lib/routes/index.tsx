/**
 * @title
 */
import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom'
import * as Pages from 'pages'
//---------------------------------------------------------------------
function Router() {
  //initalize
  //---------------------------------------------------------------------
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Pages.Main} />
      </Switch>
    </HashRouter>
  )
}
export default Router
/*
 <Route exact path="/todo" component={todo} />
        <Route exact path="/form" component={form} />
        <Route exact path="/markdown" component={markdown} />
        <Route exact path="/tab" component={tab} />
        <Route exact path="/login" component={login} />
        <Route exact path="/kakao-map" component={kakaoMap} /> 
        
       <Route exact path="/guide" component={guide} />
        <Route exact path="/guide/:id" component={guide} />

        <Route exact path="/hooks" component={hooks} /> 
*/
