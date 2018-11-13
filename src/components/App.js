import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import AppHeader from './AppHeader';
import NewRecipientContainer from '../containers/NewRecipientContainer';
import PrivateRouteContainer from '../containers/PrivateRouteContainer';
import RecipientContainer from '../containers/RecipientContainer';
import NewDonationContainer from '../containers/NewDonationContainer';
import NewDonorContainer from '../containers/NewDonorContainer';
import LoginContainer from '../containers/LoginContainer';
import AppFooter from './AppFooter';

import '../../styles/components/app.scss';

const App = () => (
  <Router>
    <React.Fragment>
      <AppHeader />
      <LoginContainer />
      <Route exact path="/recipient/" component={NewRecipientContainer} />
      <PrivateRouteContainer exact path="/recipient/:id" component={RecipientContainer} />
      <Route path="/recipient/:id/donation" component={NewDonationContainer} />
      <Route path="/donor" component={NewDonorContainer} />
      <Route path="/donor/:id" component={DonorContainer} />
      <AppFooter />
    </React.Fragment>
  </Router>
);

export default App;
