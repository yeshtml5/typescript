/**
 * @title
 */
import React from "react";
import { Route, Switch } from "react-router-dom";
//components
//Page
import main from "pages/main";
import form from "pages/form";
import markdown from "./pages/module/markdown";
/*ui*/
import tab from "./pages/ui/tab";
//---------------------------------------------------------------------
const App: React.FC = () => {
  //---------------------------------------------------------------------
  //initalize
  //---------------------------------------------------------------------
  return (
    <Switch>
      <Route exact path="/" component={main} />
      <Route exact path={process.env.PUBLIC_URL + "/form"} component={form} />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/markdown"}
        component={markdown}
      />
      <Route exact path="/tab" component={tab} />s
    </Switch>
  );
};

export default App;
