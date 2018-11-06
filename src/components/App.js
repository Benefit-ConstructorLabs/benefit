import React from 'react';
import NewRecipient from './NewRecipient';
import Recipient from './Recipient';

import '../../styles/components/app.scss';

const App = () => {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <NewRecipient />
      <Recipient />
    </React.Fragment>
  )
};

export default App;

