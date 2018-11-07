import React from 'react';
import QRCode from './QRCode';
import '../../styles/components/recipient.scss';

const Recipient = () => (
  <React.Fragment>
    <h2>Recipient Component</h2>

    <h2>You Unique QR code</h2>

    <QRCode />

    <h3 className="recipient__steps">3 easy steps to receive donations</h3>
    <ul className="recipient__steps-list">
      <li>
        Display your unique code to potential donors
      </li>
      <li>
        Donors scan your QR code and set a payment
      </li>
      <li>
        Check your total donations
      </li>
    </ul>

    <button type="button" className="recipient__print-qrcode">
      Print your QR code
    </button>

    <button type="button" className="recipient__view-donations">
      See your donation total
    </button>
  </React.Fragment>
);

export default Recipient;
