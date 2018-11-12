import React from 'react';
// import PropTypes from 'prop-types';

const RecipientProfile = () => {
  // const { firstName, LastName, photo, username, bio } = recipient;
  return (
    <section className="recipient__profile">
      <h2 className="title">Your details</h2>
      <dl>
        <dt>Name</dt>
        <dd>John Smith</dd>
        <dt>Username</dt>
        <dd>Jono23</dd>
        <dt>Your bio</dt>
        <dd>
          <ul>
            <li>I like cheese</li>
            <li>I can ride a unicycle</li>
            <li>I used to live on a boat</li>
          </ul>
        </dd>
      </dl>

    </section>
  );
};

export default RecipientProfile;
