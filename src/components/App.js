import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeaderContainer from '../containers/AppHeaderContainer';
import NewRecipientContainer from '../containers/NewRecipientContainer';
import HomePage from './HomePage';
import PrivateRouteContainer from '../containers/PrivateRouteContainer';
import RecipientContainer from '../containers/RecipientContainer';
import NewDonationContainer from '../containers/NewDonationContainer';
import NewDonorContainer from '../containers/NewDonorContainer';
import DonorContainer from '../containers/DonorContainer';
import DashboardContainer from '../containers/DashboardContainer';
import AppFooter from './AppFooter';

import '../../styles/components/app.scss';

const App = () => (
  <Router>
    <React.Fragment>
      <AppHeaderContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/recipient" component={NewRecipientContainer} />
        <PrivateRouteContainer exact path="/recipient/:id" component={RecipientContainer} />
        <Route path="/recipient/:id/donation" component={NewDonationContainer} />
        <Route exact path="/donor" component={NewDonorContainer} />
        <PrivateRouteContainer exact path="/donor/:id" component={DonorContainer} />
        <Route exact path="/organisation/:id/dashboard" component={DashboardContainer} />
        {/* <Route exact path="/login" render={() => <div />} /> */}
      </Switch>
      <AppFooter />
    </React.Fragment>
  </Router>
);

export default App;
