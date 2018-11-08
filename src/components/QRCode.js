import React from 'react';
import QRCodePackage from 'qrcode';

class QRCode extends React.Component {
  componentDidMount () {
    const id = 2; // id comes from the URL
    this.props.getQRCode(id);
    this.renderCanvas();
  }

  componentDidUpdate () {
    this.renderCanvas();
  }

  renderCanvas() {
    if (!this.canvas) {
      return;
    }
    QRCodePackage.toCanvas(
      this.canvas,
      this.props.qrCodeUrl,
      {
        errorCorrectionLevel: 'M',
        maskPattern: 4,
        scale: 4,
        version: 5,
        color: {
          dark: '#003366FF',
          light: '#CDF8FFCC'
        }
      },
      error => {
        if (error) {
          // console.error(error);
        }
        // console.log('success!');
      }
    );
  }

  render() {
    console.log(this.props)
    const canvas = !!this.props.qrCodeUrl && 
    <div>
      <canvas ref={element => {this.canvas = element}}/>
    </div>
    return (
      <React.Fragment>
        {canvas}
      </React.Fragment>
    );
  }
}

export default QRCode;
