import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import LogInMain from "./layout/LogInMain";
import Navigation from "./layout/Navigation";
import { isLogin } from "./utils";

const Login = () => {
  return (
    <Route
      render={() =>
        !isLogin() ? (
          <Fragment>
            <Navigation hasButton={false} />
            <LogInMain />
          </Fragment>
        ) : (
          <Redirect to="/" />
        )
      }
    ></Route>
  );
};

export default Login;
