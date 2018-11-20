import React from 'react';
import PropTypes from 'prop-types';
import AnimationWrapper from './AnimationWrapper';

const RecipientBalance = ({ donations }) => {
  const donationTotal = donations.reduce((acc, donation) => acc + donation.amount / 100, 0).toFixed(2);

  return (
    <section className="recipient__account">
      <h2 className="recipient__account__title">Your current balance</h2>
      <p className="recipient__account__balance">{`£${donationTotal}`}</p>
      <h3>Latest donations</h3>
      <ul className="recipient__account__donations">
        {donations.reverse().map((donation) => {
          const { id, photo, first_name: firstName, last_name: lastName, amount } = donation;
          return (
            <li className="recipient__account__donations__donation" key={id}>
              <img className="donor__photo" src={`${photo}`} alt="donor" />
              <span className="donor__name">
                {`${firstName} ${lastName}`}
              </span>
              <span className="amount">{`£${(amount / 100).toFixed(2)}`}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

RecipientBalance.propTypes = {
  donations: PropTypes.instanceOf(Array).isRequired,
};

export default AnimationWrapper(RecipientBalance);
