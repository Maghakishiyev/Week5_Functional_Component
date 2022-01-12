import React, { Fragment, useEffect, useState } from "react";
import { Route, useHistory, Redirect } from "react-router-dom";
import ForecastMain from "./layout/ForecastMain";
import Navigation from "./layout/Navigation";
import { isLogin } from "./utils/index";

const Forecast = () => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Route
      render={() =>
        isLogin() ? (
          <Fragment>
            <Navigation
              hasButton={true}
              logged={isLoggedIn}
              logedInHandler={(state: boolean) => {
                setIsLoggedIn(state);
                localStorage.removeItem("isLoggedIn");
                history.replace("/");
              }}
            />
            <ForecastMain />
          </Fragment>
        ) : (
          <Redirect to="/" />
        )
      }
    ></Route>
  );
};

export default Forecast;
