import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/donation-form.scss';

const DonationForm = ({
  donationAmount,
  setDonationAmount,
  firstName,
  photo,
  togglePaymentDetails,
}) => (
  <React.Fragment>
    <img className="donation__recipient__photo" alt={firstName} src={photo} />
    <h3 className="donation__purpose">
      {`Donate to ${firstName}`}
    </h3>
    <form
      onSubmit={(event) => {
        event.preventDefault();
        togglePaymentDetails();
      }}
      className="donation__form"
    >
      <h3 className="donation__form__heading">How much?</h3>
      <p>
        <input
          type="text"
          className="nolabel donation__form__amount"
          id="donation__amount"
          value={donationAmount === undefined ? '£' : `£${donationAmount}`}
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
      <button className="btn btn__primary btn__submit" type="submit">
        Donate to
        {' '}
        {firstName}
      </button>
    </form>
  </React.Fragment>
);

DonationForm.propTypes = {
  donationAmount: PropTypes.number,
  setDonationAmount: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  togglePaymentDetails: PropTypes.func.isRequired,
};

DonationForm.defaultProps = {
  donationAmount: undefined,
};

export default DonationForm;
