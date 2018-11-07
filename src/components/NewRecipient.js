import React from 'react';
import RecipientSignUpForm from './RecipientSignUpForm';
import '../../styles/components/newrecipient.scss';

const NewRecipient = () => (
  <React.Fragment>
    <h2>New Recipient</h2>
    <h2 className="newrecipient__title">
      Start taking digital donations in 3 steps
    </h2>
    <img src="" alt="" height="" width="" />
    <form>
      <label className="newrecipient__intro">
        Add your basic information
        </label>
      <input type="text" text="firstname" placeholder="First name" />
      <input type="text" text="lastname" placeholder="Last name" />
      <input type="text" text="telephone" placeholder="Telephone number" />
      <button className="newrecipient__upload-button">
        Upload a picture
        </button>
      <label>Now tell people 3 things about you...</label>
      <input type="text" text="text" placeholder="1. I play the piano" />
      <input type="text" text="text" placeholder="2. I like white coffee" />
      <input type="text" text="text" placeholder="3. I'm a Rugby fan" />
      <button className="newrecipient__qr-button">
        Generate Your Unique QR Code
        </button>
    </form>

    <RecipientSignUpForm />
  </React.Fragment>
);

export default NewRecipient;
