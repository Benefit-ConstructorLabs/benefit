import React from 'react';
import QRCodePackage from 'qrcode';

class QRCode extends React.Component {

  renderQRCode() {
    const url = 'http://www.benefit.com/recipient/3'; // url will eventually come from container -> this.props.url
    QRCodePackage.toCanvas(this.canvas, url, { 
      errorCorrectionLevel: 'M',
      maskPattern: 4,
      scale: 4,
      version: 5, 
        color: {
        dark: '#00737EFF',
        light: '#CDF8FFCC'
      }
    },
    error => {
      if (error) {
        console.error(error);
      }
      console.log('success!');
    })
  }

  componentDidMount() {
    this.renderQRCode();
  }

  render() {
    return (
      <React.Fragment>
        <h2>You Unique QR code</h2>
        <canvas ref={element => {this.canvas = element}} />
        <h3>3 steps to receive donations</h3>
        <ul>
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

        <button>
          Print your QR code
        </button>

        <button>
          See your donation total
        </button>

      </React.Fragment>
    );
  }
}

export default QRCode;