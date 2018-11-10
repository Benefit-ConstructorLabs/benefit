import React from 'react';
import QRCodePackage from 'qrcode';

class QRCode extends React.Component {
  componentDidMount () {
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
      `${window.location.origin}/recipient/${this.props.id}/donation`,
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
          console.error(error);
        }
        console.log('success!');
      }
    );
  }

  render() {
    console.log(this.props)
    const canvas = !!this.props.id && 
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
