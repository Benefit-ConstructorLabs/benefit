import React from 'react';
import PropType from 'prop-types';
import '../../styles/components/recipient-profile.scss';

const RecipientProfile = ({ firstName, bio }) => (
  <div className="recipient-profile">
    <h3 className="recipient-profile__headline">Fancy a chat?</h3>
    <p className="recipient-profile__intro">
      {firstName}
      {' '}
      is interested in:
    </p>
    <ol className="recipient-profile__interests">
      {bio.map(interest => (
        <li className="recipient-profile__interest">{interest}</li>
      ))}
    </ol>
  </div>
);

RecipientProfile.propTypes = {
  firstName: PropType.string.isRequired,
  bio: PropType.arrayOf(PropType.string),
};

RecipientProfile.defaultProps = {
  bio: [undefined],
};

export default RecipientProfile;
