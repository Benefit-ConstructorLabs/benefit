import React from 'react';
import Tabs from './Tabs';
import DonorBalance from './DonorBalance';
import DonorProfile from './DonorProfile';

import '../../styles/components/donor.scss';

class Donor extends React.Component {
  componentDidMount() {
    console.log('FIRED DID MOUNT', this.props);
    const { match, getDonorDetailsByID } = this.props;
    console.log(match.params.id);
    getDonorDetailsByID(match.params.id);
  }

  render() {
    const { donations, profile } = this.props;
    console.log(donations);
    return (
      <Tabs>
        <DonorBalance label="Your donations" donations={donations} />
        <DonorProfile label="Profile" profile={profile} />
      </Tabs>
    );
  }
}

export default Donor;
