import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import S3Upload from './S3Upload';
import '../../styles/components/new-donor.scss';
import '../../styles/components/temp-styles.scss';

function setInputClass(errors, touched) {
  return errors && touched ? 'errorInput' : 'validInput';
}

function StyledMessage({ errors, touched, values, elem }) {
  if (errors[elem] && touched[elem]) {
    return (
      <div className={errors[elem] ? 'errorMessage' : 'validMessage'}>
        <i className="fas cross fa-1x fa-times" />
        {errors[elem]}
      </div>);
  }
  if (!errors[elem] && values[elem] !== '') {
    return (<div className="validMessage"><i className="fas tick fa-1x fa-check-square" /></div>);
  }
  return null;
}

class NewDonor extends React.Component {
  componentWillReceiveProps(newProps) {
    // const { history } = this.props;
    // const url = `/donor/${newProps.recipientIdForQrCode}`;
    // history.push(url);
  }

  render() {
    const {
      addDonor,
    } = this.props;
    return (
      <div className="newdonor">
        <h3>Add your basic information</h3>
        <img src="" alt="" className="newdonor__header-image" />
        <Formik
          initialValues={{ firstName: '', lastName: '', tel: '', email: '', password: '', imageUrl: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.firstName) {
              errors.firstName = 'Required';
            }
            if (!values.lastName) {
              errors.lastName = 'Required';
            }
            if (!values.tel) {
              errors.tel = 'Required';
            }
            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
            } else if (values.password.length < 9) {
              errors.password = 'Password must have at least 8 characters';
            }
            if (!values.imageUrl) {
              errors.imageUrl = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              setSubmitting(false);
              addDonor(values);
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
            <form
              className="newrecipient__form"
              onSubmit={handleSubmit}
            >
              <h3 className="newrecipient__form__heading">Add your personal details</h3>
              <ul>
                <li>
                  <label htmlFor="firstName">
                    First name
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={setInputClass(errors.firstName, touched.firstName)}
                    />
                    <StyledMessage
                      errors={errors}
                      touched={touched}
                      values={values}
                      elem="firstName"
                    />
                  </label>
                </li>
                <li>
                  <label htmlFor="lastName">
                      Last name
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
                  </label>
                </li>
                <li>
                  <label htmlFor="tel">
                    Telephone
                    <input
                      type="text"
                      name="tel"
                      id="tel"
                      placeholder="Telephone number"
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
                  </label>
                </li>
                <li>
                  <label htmlFor="tel">
                    Email
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={setInputClass(errors.email, touched.email)}
                    />
                    <StyledMessage
                      errors={errors}
                      touched={touched}
                      values={values}
                      elem="email"
                    />
                  </label>
                </li>
                <li>
                  <label htmlFor="password">
                    Password
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
                  </label>
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
                Add your payment details
              </h3>

              <ul>
                <li>
                  <input
                    className="validMessage"
                    type="text"
                    name="cardNo"
                    value=""
                    placeholder="Card Number"
                  />
                </li>
                <li>
                  <input
                    className="validMessage"
                    type="text"
                    name="cardExp"
                    value=""
                    placeholder="Expiry Date"
                  />
                </li>
                <li>
                  <input
                    className="validMessage"
                    type="text"
                    name="cardCCV"
                    value=""
                    placeholder="CCV"
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


NewDonor.propTypes = {
  addDonor: PropTypes.func.isRequired,
};

export default NewDonor;
