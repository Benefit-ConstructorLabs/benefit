import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import NewRecipient from './NewRecipient';
import Recipient from './Recipient';
import NewDonation from './NewDonation';
import AppFooter from './AppFooter';

import '../../styles/components/app.scss';

const App = () => (
  <Router>
    <React.Fragment>
      <p>The app...</p>
      <AppHeader />
      <Route exact path="/recipient/" component={NewRecipient} />
      <Route exact path="/recipient/:id" component={Recipient} />
      <Route path="/recipient/:id/new-donation" component={NewDonation} />
      <AppFooter />
    </React.Fragment>
  </Router>
);


export default App;
