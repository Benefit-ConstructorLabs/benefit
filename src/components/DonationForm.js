import React from 'react';
import '../../styles/components/donation-form.scss';

const DonationForm = () => {
  return (
    <React.Fragment>
      <img src="https://via.placeholder.com/150?text=Recipient+photo" alt="Recipient photo" className="donation__recipient__photo" />
      <h3 className="donation__purpose">Donate towards a night in a shelter</h3>
      <form onSubmit={event => event.preventDefault()} className="donation__form">
        <p>
          <label htmlFor="donation__amount" className="donation__amount__label">
            How much?
            <input type="number" placeholder="£1" className="donation__amount__input" />
            <input type="range" />
          </label>
        </p>
        <p className="donation__quick-amount">
          <label htmlFor="low">
            <input type="radio" name="quick-amount" id="low" value="50p" />
            50p
          </label>
          <label htmlFor="mid">
            <input type="radio" name="quick-amount" id="mid" value="£2" />
            £2
          </label>
          <label htmlFor="high">
            <input type="radio" name="quick-amount" id="high" value="£5" />
            £5
          </label>
        </p>
        <button type="submit">Donate to firstname</button>
      </form>
    </React.Fragment >
  )
};

export default DonationForm;

