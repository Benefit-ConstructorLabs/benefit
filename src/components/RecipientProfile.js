import React from 'react';
import PropType from 'prop-types';
import '../../styles/components/recipient-profile.scss';

const RecipientProfile = ({ firstName, bio }) => (
  <div className="recipient-profile">
    {bio
      && (
        <React.Fragment>
          <h3 className="recipient-profile__headline">
            {`You could have a chat with ${firstName}.`}
          </h3>

          <ul className="recipient-profile__interests">
            {bio.map((interest) => {
              if (interest) {
                return (
                  <li key={interest} className="recipient-profile__interest">
                    {`“${interest}”`}
                  </li>
                );
              }
            })}
          </ul>
        </React.Fragment>
      )}
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
