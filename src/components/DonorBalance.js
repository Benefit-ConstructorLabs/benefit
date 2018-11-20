import React from 'react';
import PropTypes from 'prop-types';
import AnimationWrapper from './AnimationWrapper';
import '../../styles/components/donor.scss'

const DonorBalance = ({ donations }) => {
  const donationTotal = donations.reduce((acc, donation) => acc + donation.amount / 100, 0).toFixed(2);

  return (
    <section className="donor__account">
      <h2 className="donor__account__title">Your total donations</h2>
      <p className="donor__account__balance">{`£${donationTotal}`}</p>
      <h3>Latest donations</h3>
      <ul className="donor__account__donations">
        {donations.reverse().map((donation) => {
          const { id, first_name: firstName, amount, photo } = donation;
          return (
            <li className="donor__account__donations__donation" key={id}>
              <img className="recipient__photo" src={photo} alt="recipient" />
              <span className="recipient__name">{firstName}</span>
              <span className="amount">{`£${(amount / 100).toFixed(2)}`}</span>
            </li>
          );
        })
        }
      </ul>
    </section>
  );
};

DonorBalance.propTypes = {
  donations: PropTypes.instanceOf(Array).isRequired,
};

export default AnimationWrapper(DonorBalance);
