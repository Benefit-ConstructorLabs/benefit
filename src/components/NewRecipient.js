import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import S3Upload from './S3Upload';
import '../../styles/components/newrecipient.scss';

function setInputClass(errors, touched) {
  return errors && touched ? 'errorInput' : 'validInput';
}

function StyledMessage({ errors, touched, values, elem }) {
  if (errors[elem] && touched[elem]) {
    return (
      <div className={errors[elem] ? 'errorMessage' : 'validMessage'}>
        <i className="fas cross fa-1x fa-times" title={errors[elem]} />
        {/* {errors[elem]} */}
      </div>);
  }
  if (!errors[elem] && values[elem] !== '') {
    return (<div className="validMessage"><i className="fas tick fa-1x fa-check-square" /></div>);
  }
  return null;
}

class NewRecipient extends React.Component {
  componentWillReceiveProps(newProps) {
    const { recipientIdForQrCode, history } = this.props;
    if (newProps.recipientIdForQrCode !== recipientIdForQrCode) {
      const url = `/recipient/${newProps.recipientIdForQrCode}`;
      history.push(url);
    }
  }

  render() {
    const {
      addRecipient,
    } = this.props;
    return (
      <div className="newrecipient">
        <h2 className="newrecipient__title">Start taking digital donations in 3 steps</h2>
        <img src="" alt="" className="newrecipient__header-image" />
        <Formik
          initialValues={{ firstName: '', lastName: '', tel: '', username: '', password: '', reason: '', bio1: '', bio2: '', bio3: '', imageUrl: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.firstName) {
              errors.firstName = 'Required';
            }
            if (!values.lastName) {
              errors.lastName = 'Required';
            }
            const telTrimmed = values.tel.split(' ').join('');
            const validTelNum = !isNaN(telTrimmed) && telTrimmed.length === 11;
            if (!values.tel) {
              errors.tel = 'Required';
            } else if (!validTelNum) {
              errors.tel = 'Invalid number. Use numbers which are 11 digits long';
            }
            if (!values.username) {
              errors.username = 'Required';
            }
            if (!values.password) {
              errors.password = 'Required';
            } else if (values.password.length < 8) {
              errors.password = 'Password must have at least 8 characters';
            }
            if (!values.imageUrl) {
              errors.imageUrl = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              addRecipient(values);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
              <form className="newrecipient__form" onSubmit={handleSubmit} >
                <h3 className="newrecipient__form__heading">Add your personal details</h3>
                <ul>
                  <li>
                    <label className="visuallyhidden" htmlFor="firstName">
                      First name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={setInputClass(errors.firstName, touched.firstName)}
                      autoFocus="true"
                    />
                    <StyledMessage
                      errors={errors}
                      touched={touched}
                      values={values}
                      elem="firstName"
                    />
                  </li>
                  <li>
                    <label className="visuallyhidden" htmlFor="lastName">
                      Last name
                      </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last name"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={setInputClass(errors.lastName, touched.lastName)}
                    />
                    <StyledMessage
                      errors={errors}
                      touched={touched}
                      values={values}
                      elem="lastName"
                    />
                  </li>
                  <li>
                    <label className="visuallyhidden" htmlFor="tel">
                      Telephone
                    </label>
                    <input
                      type="text"
                      name="tel"
                      id="tel"
                      placeholder="Eg. 07993 852 721"
                      value={values.tel}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={setInputClass(errors.tel, touched.tel)}
                    />
                    <StyledMessage
                      errors={errors}
                      touched={touched}
                      values={values}
                      elem="tel"
                    />
                  </li>
                  <li>
                    <label className="visuallyhidden" htmlFor="username">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Choose a username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={setInputClass(errors.username, touched.username)}
                    />
                    <StyledMessage
                      errors={errors}
                      touched={touched}
                      values={values}
                      elem="username"
                    />
                  </li>
                  <li>
                    <label className="visuallyhidden" htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter a password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={setInputClass(errors.password, touched.password)}
                    />
                    <StyledMessage
                      errors={errors}
                      touched={touched}
                      values={values}
                      elem="password"
                    />
                  </li>
                  <li>
                    <S3Upload
                      name="imageUrl"
                      value={values.imageUrl}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <StyledMessage
                      errors={errors}
                      touched={touched}
                      values={values}
                      elem="imageUrl"
                    />
                  </li>
                </ul>

                <h3 className="newrecipient__form__heading">
                  What are you raising funds towards?
                </h3>
                <ul>
                  <li>
                    <input
                      type="text"
                      name="reason"
                      className="nolabel"
                      placeholder="Eg. Cancer Research UK"
                      value={values.reason}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </li>
                </ul>

                <h3 className="newrecipient__form__heading">
                  Tell people three things about yourself
                </h3>
                <ul>
                  <li>
                    <input
                      type="text"
                      name="bio1"
                      className="nolabel"
                      placeholder="I play..."
                      value={values.bio1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      name="bio2"
                      className="nolabel"
                      placeholder="I like..."
                      value={values.bio2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      name="bio3"
                      className="nolabel"
                      placeholder="I enjoy..."
                      value={values.bio3}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </li>
                </ul>
                <button
                  className="btn btn__primary btn__submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {Object.keys(touched).length === 0 || Object.keys(errors).length > 0 ? 'Complete required details' : 'Create account'}
                </button>
              </form>
            )}
        </Formik>
      </div>
    );
  }
}

NewRecipient.propTypes = {
  addRecipient: PropTypes.func.isRequired,
  recipientIdForQrCode: PropTypes.number,
};

NewRecipient.defaultProps = {
  recipientIdForQrCode: null,
};

StyledMessage.propTypes = {
  // TODO: Add proper PropTypes, Jim is sorry.
  errors: PropTypes.shape({}).isRequired,
  touched: PropTypes.shape({}).isRequired,
  values: PropTypes.shape({}).isRequired,
  elem: PropTypes.string.isRequired,
};

export default NewRecipient;
