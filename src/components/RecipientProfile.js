import React from 'react';
import '../../styles/components/recipient-profile.scss';

const RecipientProfile = () => {
  return (
    <React.Fragment>
      <h3 className="recipient-profile__headline">Fancy a chat?</h3>
      <p className="recipient-profile__intro">firstName is interested in:</p>
      <ol className="recipient__interests">
        <li className="recipient__interest">First interest</li>
        <li className="recipient__interest">Second interest</li>
        <li className="recipient__interest">Third interest</li>
      </ol>
    </React.Fragment>
  )
};

export default RecipientProfile;