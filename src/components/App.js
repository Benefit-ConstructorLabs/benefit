import React from 'react';
import AppHeader from './AppHeader';
import NewRecipient from './NewRecipient';
import Recipient from './Recipient';
import NewDonation from './NewDonation';
import AppFooter from './AppFooter';

import '../../styles/components/app.scss';

const App = () => {
  return (
    <React.Fragment>
      <p>The app...</p>
      <AppHeader />
      <NewRecipient />
      <Recipient />
      <NewDonation />
      <AppFooter />
    </React.Fragment>
  )
};

export default App;

