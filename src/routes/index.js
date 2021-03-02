import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Intro from "../pages/Intro";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
