import React from 'react';

class S3Upload extends React.Component {
  constructor () {
    super();
    this.state = {
      uploadLocation: null
    };
  }

  uploadFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const fileObj = event.target.files[0];
    formData.append('file', fileObj);
    fetch('/api/upload', {
        method: 'post',
        body: formData     
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        uploadLocation: data.Location
      })
      this.props.setRecipientPhotoUrl(data.Location);
    })
    .catch(error => response.json({ error: error.message }));
  }

  render () {
    return (
      <React.Fragment>
        {this.state.uploadLocation &&
        <div><img src={this.state.uploadLocation} height="100"/></div>}
        <input label='Upload a picture' title='Upload a picture' type='file' onChange={this.uploadFile} />
      </React.Fragment>
    );
  }
}

export default S3Upload;