import React, { Fragment, useState, useEffect } from "react";
import LandingMain from "./layout/LandingMain";
import Navigation from "./layout/Navigation";

const Landing: React.FC<{}> = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  let storedUserInfo: string = localStorage.getItem("isLoggedIn") || "";
  useEffect(() => {
    if (storedUserInfo === "1") {
      setIsLoggedIn(true);
    }
  }, [storedUserInfo]);
  // const logedInHandler = (x: boolean) => {
  //   setIsLoggedIn(Boolean);
  // };
  return (
    <Fragment>
      <Navigation
        hasButton={true}
        logged={isLoggedIn}
        logedInHandler={(state: boolean) => {
          setIsLoggedIn(state);
          localStorage.removeItem("isLoggedIn");
        }}
      />
      <LandingMain />
    </Fragment>
  );
};

export default Landing;
