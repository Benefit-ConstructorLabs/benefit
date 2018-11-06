import React from 'react';
import '../../styles/components/donation-form.scss';

const DonationForm = () => {
  return (
    <React.Fragment>
      <img src="https://via.placeholder.com/150?text=Recipient+photo" alt="Recipient photo" className="donation__recipient__photo" />
      <h3 className="donation__purpose">Donate towards a night in a shelter</h3>
      <form onSubmit={event => event.preventDefault()} className="donation__form">
        <h4>How much?</h4>
        <p>
          <input type="number" placeholder="£1" className="donation__amount__input" id="donation__amount" />
        </p>
        <p>
          <input type="range" />
        </p>
        <p className="donation__quick-amount">
          <button>50p</button>
          <button>£1</button>
          <button>£2</button>
        </p>
        <button type="submit">Donate to firstname</button>
      </form>
    </React.Fragment >
  )
};

export default DonationForm;

