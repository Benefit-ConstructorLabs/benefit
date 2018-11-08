import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/donation-form.scss';

const DonationForm = ({ donationAmount, setDonationAmount, firstName, submitDonation }) => (
  <div className="donation">
    <img src="https://via.placeholder.com/150?text=Recipient+photo" alt="Recipient" className="donation__recipient__photo" />
    <h3 className="donation__purpose">Donate towards a night in a shelter</h3>
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submitDonation();
      }}
      className="donation__form"
    >
      <h4>How much?</h4>
      <p>
        <input
          type="number"
          className="donation__form__amount"
          id="donation__amount"
          value={donationAmount === undefined ? '' : donationAmount}
          onChange={event => setDonationAmount(event.target.value)}
        />
      </p>
      <p>
        <input onChange={event => setDonationAmount(event.target.value)} value={donationAmount} className="donation__form__slider" type="range" min="1" max="10" />
      </p>
      <p className="donation__form__quick-amount">
        <button onClick={event => setDonationAmount(event.target.value)} type="button" className="btn btn__quick-amount" value="1">£1</button>
        <button onClick={event => setDonationAmount(event.target.value)} type="button" className="btn btn__quick-amount" value="2">£2</button>
        <button onClick={event => setDonationAmount(event.target.value)} type="button" className="btn btn__quick-amount" value="5">£5</button>
      </p>
      <button className="btn btn__submit" type="submit">
        Donate to
        {' '}
        {firstName}
      </button>
    </form>
  </div>
);

DonationForm.propTypes = {
  donationAmount: PropTypes.number,
  setDonationAmount: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  submitDonation: PropTypes.func.isRequired,
};

DonationForm.defaultProps = {
  donationAmount: undefined,
};


export default DonationForm;
