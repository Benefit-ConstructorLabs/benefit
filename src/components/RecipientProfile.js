import React from 'react';
import PropTypes from 'prop-types';
import AnimationWrapper from './AnimationWrapper';

const RecipientProfile = ({ profile }) => {
  const { firstName, lastName, photo, username, tel, bio } = profile;
  return (
    <section className="recipient__profile">
      <h2 className="recipient__profile__title">Your details</h2>
      <img className="recipient__profile__photo" alt="recipient" src={photo} />
      <dl>
        <dt>Name</dt>
        <dd>{`${firstName} ${lastName}`}</dd>
        <dt>Username</dt>
        <dd>{username}</dd>
        <dt>Telephone</dt>
        <dd>{tel}</dd>
        <dt>Your bio</dt>
        <dd>
          {bio.length > 0
            && (
              <ul>
                {bio.map(item => (<li key={`bio_${Math.random() * item.length}`}>{`${item}`}</li>))}
              </ul>
            )
          }
        </dd>
      </dl>

    </section>
  );
};

RecipientProfile.propTypes = {
  profile: PropTypes.instanceOf(Array).isRequired,
};

export default AnimationWrapper(RecipientProfile);
