import React from 'react';
import S3UploadContainer from '../containers/S3UploadContainer';
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
      <ul>
        <li><input type="text" name="firstname" placeholder="First name" /></li>
        <li><input type="text" name="lastname" placeholder="Last name" /></li>
        <li><input type="text" name="telephone" placeholder="Telephone number" /></li>
        <li>x
          {/* {this.state.recipientPhotoUrl &&
          <p>{this.state.recipientPhotoUrl}</p>
          } */}
        </li>
        <li><S3UploadContainer /></li>
        <li><label>Now tell people 3 things about you...</label></li>
        <li><input type="text" name="bio1" placeholder="1" /></li>
        <li><input type="text" name="bio2" placeholder="2" /></li>
        <li><input type="text" name="bio3" placeholder="3" /></li>
        <li><button className="newrecipient__qr-button">
          Generate Your Unique QR Code
          </button></li>
      </ul>
    </form>

    <RecipientSignUpForm />

  </React.Fragment>
);

export default NewRecipient;
