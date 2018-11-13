import React from 'react';
import PropTypes from 'prop-types';
import QRCodePackage from 'qrcode';

class QRCode extends React.Component {
  componentDidMount() {
    this.renderCanvas();
  }

  componentDidUpdate() {
    this.renderCanvas();
  }

  renderCanvas() {
    const { id } = this.props;
    if (!this.canvas) {
      return;
    }
    QRCodePackage.toCanvas(
      this.canvas,
      `${window.location.origin}/recipient/${id}/donation`,
      {
        errorCorrectionLevel: 'M',
        maskPattern: 4,
        scale: 4,
        version: 5,
        color: {
          dark: '#003366FF',
          light: '#CDF8FFCC',
        },
      },
      (error) => {
        if (error) {
          console.error(error);
        }
      },
    );
  }

  render() {
    const { id } = this.props;
    const canvas = !!id
      && (
        <div className="recipient__qrcode">
          <canvas ref={(element) => { this.canvas = element; }} />
        </div>
      );
    return (
      <React.Fragment>
        {canvas}
      </React.Fragment>
    );
  }
}

QRCode.propTypes = {
  id: PropTypes.string.isRequired,
};

export default QRCode;
