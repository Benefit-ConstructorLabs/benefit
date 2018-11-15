import React from 'react';
import PropTypes from 'prop-types';

class S3Upload extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  uploadFile = (event) => {
    event.preventDefault();
    const { onChange, name } = this.props;
    const formData = new FormData();
    const fileObj = event.target.files[0];

    if (!fileObj) {
      onChange({
        target: { name, value: '' },
      });
    }

    formData.append('file', fileObj);
    fetch('/api/upload', {
      method: 'post',
      body: formData,
    })
      .then(response => response.json())
      .then((data) => {
        if (onChange) {
          onChange({
            target: { name, value: data.Location },
          });
        }
      })
      .catch(error => error.json({ error: error.message }));
  }

  handleMouseDown = (event) => {
    event.preventDefault();
    this.inputRef.current.click();
  }

  handleClick = (event) => {
    event.preventDefault();
  }

  render() {
    const { value } = this.props;
    return (
      <React.Fragment>
        {value
          && (
            <div className="newrecipient__photo">
              <img alt="portrait" src={value} height="100" />
            </div>
          )
        }

        <label className="fileUpload visuallyhidden" htmlFor="pictureupload">
          Add a photo </label>
        <button className="btn btn__secondary btn__upload" type="button" onMouseDown={this.handleMouseDown} onClick={this.handleClick}>
          {value ? 'Change photo' : 'Add photo'}
        </button>
        <input
          ref={this.inputRef}
          id="pictureUpload"
          type="file"
          style={{ display: 'none' }}
          onChange={this.uploadFile}
        />
      </React.Fragment>
    );
  }
}

S3Upload.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

S3Upload.defaultProps = {
  value: '',
};

export default S3Upload;
