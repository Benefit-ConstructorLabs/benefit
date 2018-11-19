import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import AppHeaderContainer from '../containers/AppHeaderContainer';
import NewRecipientContainer from '../containers/NewRecipientContainer';
import HomePage from '../components/HomePage';
import PrivateRouteContainer from '../containers/PrivateRouteContainer';
import RecipientContainer from '../containers/RecipientContainer';
import NewDonationContainer from '../containers/NewDonationContainer';
import NewDonorContainer from '../containers/NewDonorContainer';
import DonorContainer from '../containers/DonorContainer';
import DashboardContainer from '../containers/DashboardContainer';
import AppFooter from './AppFooter';
import ScrollToTop from './ScrollToTop';

import '../../styles/components/app.scss';

const App = () => (
  <Router>
    <ScrollToTop>
      <AppHeaderContainer />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/recipient/" component={NewRecipientContainer} />
      <PrivateRouteContainer exact path="/recipient/:id" component={RecipientContainer} />
      <Route path="/recipient/:id/donation" component={NewDonationContainer} />
      <Route exact path="/donor" component={NewDonorContainer} />
      <PrivateRouteContainer exact path="/donor/:id" component={DonorContainer} />
      <Route exact path="/organisation/:id/dashboard" component={DashboardContainer} />
      <AppFooter />
    </ScrollToTop>
  </Router>
);

export default App;
