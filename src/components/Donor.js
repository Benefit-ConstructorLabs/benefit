import React from 'react';
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

export default Donor;
