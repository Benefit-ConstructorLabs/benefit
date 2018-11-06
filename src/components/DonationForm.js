import React from 'react';
import '../../styles/components/donation-form.scss';

const DonationForm = () => {
  return (
    <div className="donation">
      <img src="https://via.placeholder.com/150?text=Recipient+photo" alt="Recipient photo" className="donation__recipient__photo" />
      <h3 className="donation__purpose">Donate towards a night in a shelter</h3>
      <form onSubmit={event => event.preventDefault()} className="donation__form">
        <h4>How much?</h4>
        <p>
          <input type="number" placeholder="£1" className="donation__form__amount" id="donation__amount" />
        </p>
        <p>
          <input type="range" />
        </p>
        <p className="donation__form__quick-amount">
          <button className="btn btn__quick-amount">50p</button>
          <button className="btn btn__quick-amount">£1</button>
          <button className="btn btn__quick-amount">£2</button>
        </p>
        <button className="btn btn__submit" type="submit">Donate to firstname</button>
      </form>
    </div>
  )
};

export default DonationForm;

