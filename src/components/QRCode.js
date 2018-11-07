import React from 'react';
import QRCodePackage from 'qrcode';

class QRCode extends React.Component {
  constructor(){
    super();
    this.state = {
      qrCodeId: null
    }
  }

  getQRCode = (event) => {
    const id = event.target.value;
    fetch(`/api/recipient/${id}`)
    .then(response => response.json())
    .then(body => {
        this.setState({
          recipient: body[0]
        }, () => this.renderQRCode())
      }
    )
    .catch(error => {
      response.json({ error: error.message })
    });
  }

  renderQRCode() {
    const url = `http://www.benefit.com/recipient/${this.state.recipient.id}`;
    QRCodePackage.toCanvas(
      this.canvas,
      url,
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
    const canvas = !!this.state.recipient && 
    <div>
      <ul>
      {Object.keys(this.state.recipient).map(key => {
        return <li key={key}>{key}: {this.state.recipient[key]}</li>;
      })}
      </ul>
      <canvas ref={element => {this.canvas = element}}/>
    </div>
    return (
      <React.Fragment>
        <select onChange={this.getQRCode}>
          <option value="">Select a recipient</option>
          <option value="1">John Smith</option>
          <option value="2">Mary Jones</option>
          <option value="3">Jack Daniels</option>
        </select>
        {canvas}
      </React.Fragment>
    );
  }
}

export default QRCode;
