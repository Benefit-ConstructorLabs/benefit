import React from 'react';
// import PropTypes from 'prop-types';

const DonorProfile = ({ profile }) => {
  const { firstName, lastName, photo, username, tel } = profile;
  return (
    <section className="donor__profile">
      <h2 className="donor__profile__title">Your details</h2>
      <img className="donor__profile__photo" alt="donor" src={photo} />
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

export default DonorProfile;
