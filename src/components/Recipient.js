import React from 'react';
import PropTypes from 'prop-types';
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
    return (
      <Tabs>
        <RecipientCode label="QR Code" routeParams={match} />
        <RecipientBalance label="Balance" donations={donations} />
        <RecipientProfile label="Profile" profile={profile} />
      </Tabs>
    );
  }
}

Recipient.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  donations: PropTypes.instanceOf(Array).isRequired,
  getProfileDetailsByID: PropTypes.func.isRequired,
  profile: PropTypes.instanceOf(Array).isRequired,
};

export default Recipient;
