import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import AppHeader from './AppHeader';
import NewRecipientContainer from '../containers/NewRecipientContainer';
import AnimationWrapper from './AnimationWrapper';
import PrivateRouteContainer from '../containers/PrivateRouteContainer';
import Recipient from './Recipient';
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
      <PrivateRouteContainer exact path="/recipient/:id" component={AnimationWrapper(Recipient)} />
      <Route path="/recipient/:id/donation" component={NewDonationContainer} />
      <Route path="/donor" component={NewDonorContainer} />
      <AppFooter />
    </React.Fragment>
  </Router>
);

export default App;
