import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Forecast from "./Components/Forecast";
import Landing from "./Components/Landing";
import Login from "./Components/Login";

import "./index.css";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/forecast" exact>
          <Forecast />
        </Route>

        <Route path="/" exact>
          <Landing />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
