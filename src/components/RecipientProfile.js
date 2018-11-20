import React from 'react';
import PropTypes from 'prop-types';
import AnimationWrapper from './AnimationWrapper';

const RecipientProfile = ({ profile }) => {
  const { firstName, lastName, photo, username, tel, bio, reason } = profile;
  return (
    <section className="recipient__profile">
      <img className="recipient__profile__photo" alt="recipient" src={photo} />
      <h3 className="recipient__profile__title">Your details</h3>
      <dl>
        <dt>Name</dt>
        <dd>{`${firstName} ${lastName}`}</dd>
        <dt>Username</dt>
        <dd>{username}</dd>
        <dt>Telephone</dt>
        <dd>{tel}</dd>
        <dt>Reason</dt>
        <dd>{reason}</dd>
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
  profile: PropTypes.instanceOf(Object).isRequired,
};

export default AnimationWrapper(RecipientProfile);
