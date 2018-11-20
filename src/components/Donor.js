import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import DonorBalance from './DonorBalance';
import DonorProfile from './DonorProfile';

import '../../styles/components/donor.scss';

class Donor extends React.Component {
  componentDidMount() {
    const { match, getDonorDetailsByID } = this.props;
    getDonorDetailsByID(match.params.id);
  }

  render() {
    const { donations, profile } = this.props;
    return (
      <Tabs>
        <DonorBalance label="Your donations" donations={donations} />
        <DonorProfile label="Profile" profile={profile} />
      </Tabs>
    );
  }
}

Donor.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  getDonorDetailsByID: PropTypes.func.isRequired,
  donations: PropTypes.instanceOf(Array).isRequired,
  profile: PropTypes.instanceOf(Object).isRequired,
};

export default Donor;
