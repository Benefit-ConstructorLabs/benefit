import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import NewRecipientContainer from '../containers/NewRecipientContainer';
// import AnimationWrapper from './AnimationWrapper';
import RecipientContainer from './Recipient';
import NewDonationContainer from '../containers/NewDonationContainer';
import NewDonorContainer from '../containers/NewDonorContainer';
import AppFooter from './AppFooter';

import '../../styles/components/app.scss';

const App = () => (
  <Router>
    <React.Fragment>
      <AppHeader />
      <Route exact path="/recipient/" component={NewRecipientContainer} />
      {/* <Route exact path="/recipient/:id" component={AnimationWrapper(Recipient)} /> */}
      <Route exact path="/recipient/:id" component={RecipientContainer} />
      <Route path="/recipient/:id/donation" component={NewDonationContainer} />
      <Route path="/donor" component={NewDonorContainer} />
      <AppFooter />
    </React.Fragment>
  </Router>
);

export default App;
