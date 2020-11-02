import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUsPage from "../pages/AboutUsPage/aboutus_page";
import CareersPage from "../pages/CareersPage/careers_page";
import CommunitycarePage from "../pages/CommunityCarePage/community_care_page";
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
        <Route exact path={routeNames.aboutus} component={AboutUsPage} />
        <Route exact path={routeNames.communitycare} component={CommunitycarePage} />
        <Route exact path={routeNames.careers} component={CareersPage} />
      </Switch>
    </Router>
  );
}
