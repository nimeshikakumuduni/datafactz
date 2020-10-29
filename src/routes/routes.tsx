import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactPage from "../pages/contactPage/contact_page";
import HomePage from "../pages/HomePage/home_page";
import SolutionPage from "../pages/solutionPage/solution_page";
import routeNames from "./route_names";

export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={routeNames.home} component={HomePage} />
        <Route exact path={routeNames.contact} component={ContactPage} />
        <Route exact path={routeNames.solution} component={SolutionPage} />
      </Switch>
    </Router>
  );
}
