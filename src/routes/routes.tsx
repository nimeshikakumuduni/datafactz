import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUsPage from "../pages/AboutUsPage/aboutus_page";
import BigDataPage from "../pages/BigDataPage/big_data_page";
import BusinessIntelligentPage from "../pages/BusinessIntelligentPage/business_intelligent_page";
import CareersPage from "../pages/CareersPage/careers_page";
import CommunitycarePage from "../pages/CommunityCarePage/community_care_page";
import ContactPage from "../pages/contactPage/contact_page";
import CustomerAnalyticsPage from "../pages/CustomerAnalyticsPage/customer_analytics_page";
import HomePage from "../pages/HomePage/home_page";
import IBMPartnershipPage from "../pages/IBMPartnershipPage/ibm_partnership_page";
import MarketingAnalyticsPage from "../pages/MarketingAnalyticsPage/marketing_analytics_page";
import RealTimeAnalyticsPage from "../pages/RealTimeAnalyticsPage/realtime_analytics_page";
import RiskAnalyticsPage from "../pages/RiskAnalyticsPage/risk_analytics_page";
import SocialmediaAnalyticsPage from "../pages/SocialMediaAnalyticsPage/socialmedia_analytics_page";
import SolutionPage from "../pages/solutionPage/solution_page";
import SupplychainAnalyticsPage from "../pages/SupplychainAnalyticsPage/supplycain_analytics_page";
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
        <Route exact path={routeNames.ibmPage} component={IBMPartnershipPage} />
        <Route exact path={routeNames.SupplychainAnalytics} component={SupplychainAnalyticsPage} />
        <Route exact path={routeNames.CustomerAnalytics} component={CustomerAnalyticsPage} />
        <Route exact path={routeNames.MarketingAnalyticsPage} component={MarketingAnalyticsPage} />
        <Route exact path={routeNames.RiskAnalyticsPage} component={RiskAnalyticsPage} />
        <Route exact path={routeNames.SocialmediaAnalyticsPage} component={SocialmediaAnalyticsPage} />
        <Route exact path={routeNames.RealTimeAnalyticsPage} component={RealTimeAnalyticsPage} />
        <Route exact path={routeNames.BigDataPage} component={BigDataPage} />
        <Route exact path={routeNames.BusinessIntelligentPage} component={BusinessIntelligentPage} />
      </Switch>
    </Router>
  );
}
