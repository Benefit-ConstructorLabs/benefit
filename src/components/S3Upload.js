import React from 'react';
import PropTypes from 'prop-types';

class S3Upload extends React.Component {
  constructor() {
    super();
    this.state = {
      uploadLocation: null,
    };
  }

  uploadFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const fileObj = event.target.files[0];
    formData.append('file', fileObj);
    fetch('/api/upload', {
      method: 'post',
      body: formData,
    })
      .then(response => response.json())
      .then((data) => {
        const { setRecipientPhotoUrl } = this.props;
        this.setState({
          uploadLocation: data.Location,
        });
        setRecipientPhotoUrl(data.Location);
      })
      .catch(error => error.json({ error: error.message }));
  }

  handleBlur() {
    console.log('upload blurred')
  }

  render() {
    const { uploadLocation } = this.state;
    return (
      <React.Fragment>
        {uploadLocation
          && (
            <div className="newrecipient__photo">
              <img alt="portrait" src={uploadLocation} height="100" />
            </div>
          )
        }
        <label className="fileUpload" htmlFor="pictureupload">
          Add a photo
          <input
            id="pictureUpload"
            type="file"
            onBlur={this.handleBlur}
            onChange={this.uploadFile}
          />
        </label>
      </React.Fragment>
    );
  }
}

S3Upload.propTypes = {
  setRecipientPhotoUrl: PropTypes.func.isRequired,
};

export default S3Upload;
