import React from 'react';
import RecipientSignUpForm from './RecipientSignUpForm';
import '../../styles/components/newrecipient.scss';

const NewRecipient = () => (
  <React.Fragment>
    <h2>New Recipient</h2>
    <h2 className="newrecipient__title">Start taking digital donations in 3 steps</h2>
    <img src="" alt="" height="" width="" />
    <form>
      <h2 className="newrecipient__intro">Add your basic information</h2>
      <input type="text" text="firstname" id="firstname" placeholder="First name" />
      <input type="text" text="lastname" id="lastname" placeholder="Last name" />
      <input type="text" text="telephone" id="telephone" placeholder="Telephone number" />
      <input type="text" text="username" id="username" placeholder="Choose your username" />
      <input type="text" text="password" id="password" placeholder="Set a password" />
      <button className="newrecipient__photo-button" type="submit" value="Submit">
        Upload a picture
      </button>
      <h2>Now tell people 3 things about you...</h2>
      <input type="text" text="text" id="textbox1" placeholder="1. I play the piano" />
      <input type="text" text="text" id="textbox2" placeholder="2. I like white coffee" />
      <input type="text" text="text" id="textbox3" placeholder="3. I'm a Rugby fan" />
      <button className="newrecipient__qr-button" type="submit" value="Submit">
        Generate Your Unique QR Code
      </button>
    </form>

    <RecipientSignUpForm />
  </React.Fragment>
);

export default NewRecipient;
