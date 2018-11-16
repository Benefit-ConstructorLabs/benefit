import React from 'react';
import PropTypes from 'prop-types';
import AnimationWrapper from './AnimationWrapper';

const DonorProfile = ({ profile }) => {
  const { firstName, lastName, photo, username, tel } = profile;
  return (
    <section className="donor__profile">
      <img className="donor__profile__photo" alt="donor" src={photo} />
      <h3 className="donor__profile__title">Your details</h3>
      <dl>
        <dt>Name</dt>
        <dd>{`${firstName} ${lastName}`}</dd>
        <dt>Username</dt>
        <dd>{username}</dd>
        <dt>Telephone</dt>
        <dd>{tel}</dd>
      </dl>
    </section>
  );
};

DonorProfile.propTypes = {
  profile: PropTypes.instanceOf(Array).isRequired,
};

export default AnimationWrapper(DonorProfile);
