import React from 'react';
import QRCodePackage from 'qrcode';

class QRCode extends React.Component {
  constructor(){
    super();
    this.state = {
      qrCodeId: null
    }
  }

  componentDidMount () {
    const id = 1;
    this.props.getQRCode(id, QRCodePackage, this.canvas);
  }

  render() {
    const canvas = !!this.props.QRCodeUrl && 
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
