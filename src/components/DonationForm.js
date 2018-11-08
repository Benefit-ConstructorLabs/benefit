import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/donation-form.scss';

const DonationForm = ({ setDonationAmount, submitDonation, donationAmount }) => (
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
        <input type="range" />
      </p>
      <p className="donation__form__quick-amount">
        <button type="button" className="btn btn__quick-amount">50p</button>
        <button type="button" className="btn btn__quick-amount">£1</button>
        <button type="button" className="btn btn__quick-amount">£2</button>
      </p>
      <button className="btn btn__submit" type="submit">Donate to firstname</button>
    </form>
  </div>
);

DonationForm.propTypes = {
  donationAmount: PropTypes.number,
  setDonationAmount: PropTypes.func.isRequired,
  submitDonation: PropTypes.func.isRequired,
};

DonationForm.defaultProps = {
  donationAmount: undefined,
};


export default DonationForm;
