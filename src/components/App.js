import React from 'react';
import AppHeader from './AppHeader';
import NewRecipientContainer from '../containers/NewRecipientContainer';
import Recipient from './Recipient';
import NewDonation from './NewDonation';
import AppFooter from './AppFooter';

import '../../styles/components/app.scss';

const App = () => (
  <React.Fragment>
    <p>The app...</p>
    <AppHeader />
    <NewRecipientContainer />
    <Recipient />
    <NewDonation />
    <AppFooter />
  </React.Fragment>
);

export default App;
