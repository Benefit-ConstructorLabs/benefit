import React from 'react';
import QRCodePackage from 'qrcode';

class QRCode extends React.Component {

  componentDidMount() {
    this.renderQRCode();
  }

  renderQRCode() {
    // url will come from container -> this.props.url
    const url = 'http://www.benefit.com/recipient/3'; 
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

  render() {
    return (
      <React.Fragment>
        <canvas ref={element => {this.canvas = element}} />
      </React.Fragment>
    );
  }
}

export default QRCode;