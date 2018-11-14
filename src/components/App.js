import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import AppHeaderContainer from '../containers/AppHeaderContainer';
import NewRecipientContainer from '../containers/NewRecipientContainer';
import PrivateRouteContainer from '../containers/PrivateRouteContainer';
import RecipientContainer from '../containers/RecipientContainer';
import NewDonationContainer from '../containers/NewDonationContainer';
import NewDonorContainer from '../containers/NewDonorContainer';
import DonorContainer from '../containers/DonorContainer';
import AppFooter from './AppFooter';

import '../../styles/components/app.scss';

const App = () => (
  <Router>
    <React.Fragment>
      <AppHeaderContainer />
      <Route exact path="/recipient/" component={NewRecipientContainer} />
      <PrivateRouteContainer exact path="/recipient/:id" component={RecipientContainer} />
      <Route path="/recipient/:id/donation" component={NewDonationContainer} />
      <Route exact path="/donor" component={NewDonorContainer} />
      <PrivateRouteContainer exact path="/donor/:id" component={DonorContainer} />
      <AppFooter />
    </React.Fragment>
  </Router>
);

export default App;
