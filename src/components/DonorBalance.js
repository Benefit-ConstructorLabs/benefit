import React from 'react';

const DonorBalance = ({ donations }) => {
  const donationTotal = donations.reduce((acc, donation) => {
    return acc + donation.amount;
  }, 0);

  return (
    <section className="donor__account">
      <h2 className="donor__account__title">Your total donations</h2>
      <p className="donor__account__balance">{`£${donationTotal}`}</p>
      <h3>Latest donations</h3>
      <ul className="donor__account__donations">
        {donations.map((donation) => {
          const { id, firstName, amount, photo } = donation;
          return (
            <li className="donor__account__donations__donation" key={id}>
              <img className="recipient__photo" src={photo} alt="recipient" />
              <span className="recipient__name">{firstName}.</span>
              <span className="amount">{`£${amount}`}</span>
            </li>
          );
        },
        )
        }

      </ul>
    </section>
  );
}

export default DonorBalance;
