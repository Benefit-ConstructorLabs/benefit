import React from 'react';
import '../../styles/components/recipient-profile.scss';

const RecipientProfile = () => {
  return (
    <div className="recipient-profile">
      <h3 className="recipient-profile__headline">Fancy a chat?</h3>
      <p className="recipient-profile__intro">firstName is interested in:</p>
      <ol className="recipient-profile__interests">
        <li className="recipient-profile__interest">First interest</li>
        <li className="recipient-profile__interest">Second interest</li>
        <li className="recipient-profile__interest">Third interest</li>
      </ol>
    </div>
  )
};

export default RecipientProfile;