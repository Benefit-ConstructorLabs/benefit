import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/payment-details-form.scss';
import { injectStripe } from 'react-stripe-elements';
import PaymentRequestButton from './PaymentRequestButton';

// import AddressSection from './AddressSection';
import CardSection from './CardSection';

const PaymentDetailsForm = ({
  stripe,
  createPaymentDetails,
  toggleDonationComplete,
  donationAmount,
  firstName,
  history,
  location,
  isLoggedIn,
  userType,
  setDropdown,
  dropdown,
}) => {
  const handleLogin = () => {
    history.push({
      pathname: '/login',
      state: { from: location },
    });
    setDropdown(dropdown);
  };

  return !isLoggedIn && userType !== 'donor' ? (
    <div className="payment-details">
      <h2>Set up payment</h2>
      <p>Already have an account?</p>
      <button className="btn" type="button" onClick={handleLogin}>
        Login
      </button>

      <h3 className="payment-details__heading">Continue donating anonymously</h3>
      <form
        className="payment-details__form"
        onSubmit={(event) => {
          event.preventDefault();
          stripe.createToken().then(({ token }) => {
            console.log('Received Stripe token:', token);
            toggleDonationComplete();
            createPaymentDetails(token.id);
          });
        }}
      >
        <PaymentRequestButton
          createPaymentDetails={createPaymentDetails}
          toggleDonationComplete={toggleDonationComplete}
          donationAmount={donationAmount}
        />
        <CardSection />
        <button className="btn btn__primary btn__submit" type="submit">
          {`Donate £${donationAmount} to ${firstName}`}
        </button>
      </form>
    </div>
  ) : (
    <div>
      <button className="btn btn__primary btn__submit" type="submit">
        {`Donate £${donationAmount} to ${firstName}`}
      </button>
    </div>
  );
};

PaymentDetailsForm.propTypes = {
  createPaymentDetails: PropTypes.func.isRequired,
  toggleDonationComplete: PropTypes.func.isRequired,
  donationAmount: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  dropdown: PropTypes.bool.isRequired,
  setDropdown: PropTypes.func.isRequired,
};

export default injectStripe(PaymentDetailsForm);
