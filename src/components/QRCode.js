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
        dark: '#3333ffff',
        light: '#ffff9966'
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
        <p>QR code component</p>
        <canvas ref={element => {this.canvas = element}} />
      </React.Fragment>
    );
  }
}

export default QRCode;