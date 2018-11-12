import React from 'react';
// import PropTypes from 'prop-types';
import Tabs from './Tabs';
import RecipientCode from './RecipientCode';
import RecipientBalance from './RecipientBalance';
import RecipientProfile from './RecipientProfile';

import '../../styles/components/recipient.scss';

class Recipient extends React.Component {
  componentDidMount() {
    const { match, getProfileDetailsByID } = this.props;
    getProfileDetailsByID(match.params.id);
  }

  render() {
    const { match, donations, profile } = this.props;
    console.log(donations);
    return (
      <Tabs>
        <RecipientCode label="QR Code" routeParams={match} />
        <RecipientBalance label="Balance" donations={donations} />
        <RecipientProfile label="Profile" profile={profile} />
      </Tabs>
    );
  }
}

export default Recipient;
