import React from 'react';
import PropTypes from 'prop-types';
import QRCodeContainer from '../containers/QRCodeContainer';
import '../../styles/components/recipient.scss';

const RecipientCode = ({ match }) => (
  <section className="recipient">
    <h2 className="recipient__title">Your Unique QR code</h2>
    <QRCodeContainer id={match.params.id} />
    <h3 className="recipient__steps">Three easy steps to receive donations</h3>
    <ol className="recipient__steps-list">
      <li className="recipient__steps-list__item">Display your unique code to potential donors</li>
      <li className="recipient__steps-list__item">Donors scan your QR code and set a payment</li>
      <li className="recipient__steps-list__item">Check your total donations</li>
    </ol>
    <button type="button" className="btn btn__print-qrcode">
      Print your QR code
    </button>
    <button type="button" className="btn btn__view-donations">
      See your donation total
    </button>
  </section>
);

RecipientCode.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({ id: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default RecipientCode;
