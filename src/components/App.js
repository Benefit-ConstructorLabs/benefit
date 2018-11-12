import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import NewRecipientContainer from '../containers/NewRecipientContainer';
import Recipient from './Recipient';
import NewDonation from './NewDonation';
import NewDonationContainer from '../containers/NewDonationContainer';
import NewDonorContainer from '../containers/NewDonorContainer';
import RecipientWallet from './RecipientWallet';
import AppFooter from './AppFooter';

import '../../styles/components/app.scss';

const App = () => (
  <Router>
    <React.Fragment>
      <p>The app...</p>
      <AppHeader />
      <form>
        <div>
          <label>Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <input type="submit" value="Log In" />
        </div>
      </form>
      <Route exact path="/recipient/" component={NewRecipientContainer} />
      <Route exact path="/recipient/:id" component={Recipient} />
      <Route path="/recipient/:id/donation" component={NewDonationContainer} />
      <Route path="/donor" component={NewDonorContainer} />
      <Route path="/wallet" component={RecipientWallet} />
      <AppFooter />
    </React.Fragment>
  </Router>
);

export default App;
