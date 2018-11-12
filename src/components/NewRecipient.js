import React from 'react';
import PropTypes from 'prop-types';
import S3UploadContainer from '../containers/S3UploadContainer';
import { Formik } from 'formik';
import '../../styles/components/newrecipient.scss';
import '../../styles/components/temp-styles.scss';

class NewRecipient extends React.Component {

  componentWillReceiveProps(newProps) {
    const { recipientIdForQrCode, history } = this.props;
    if (newProps.recipientIdForQrCode !== recipientIdForQrCode) {
      const url = `/recipient/${newProps.recipientIdForQrCode}`;
      history.push(url);
    }
  }

  setInputClass(errors, touched) {
    return errors && touched ? 'errorInput' : 'validInput';
  }

  setMessageStyle(errors, touched, values, elem) {
    return (errors[elem] && touched[elem] &&
    <div className={errors[elem] ? 'errorMessage' : 'validMessage'}><i className="fas cross fa-1x fa-times" />{errors[elem]}</div> ||
    !errors[elem] && values[elem] !== '' && <div className="validMessage"><i className="fas tick fa-1x fa-check-square" /></div>)
  }

  handleChange(event) {
    this.setInputField(event.target.name, event.target.value);
  }

  render() {
    const {
      addRecipient,
      setInputField,
      firstName,
      lastName,
      tel,
      username,
      password,
      bio1,
      bio2,
      bio3,
    } = this.props;
    return (
      <div className="newrecipient">
        <h2 className="newrecipient__title">Start taking digital donations in 3 steps</h2>
        <img src="" alt="" className="newrecipient__header-image" />
        <Formik
          initialValues={{ firstName: '', email: '', password: '' }}
          validate={(values) => {
            let errors = {};
            if (!values.firstName) {
              errors.firstName = 'Required';
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
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              setSubmitting(false);
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
              onSubmit={(event) => {
                event.preventDefault();
                addRecipient();
              }}
            >
              <h3 className="newrecipient__form__heading">Add your personal details</h3>
              <ul>
                <li>
                  <label htmlFor="firstName">
                    First name
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      id="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={this.setInputClass(errors.firstName, touched.firstName)}
                    />
                    {this.setMessageStyle(errors, touched, values, 'firstName')}
                  </label>
                </li>
                <li>
                  <label htmlFor="lastName">
                    Last name
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      id="lastName"
                      value={lastName}
                      onChange={event => handleChange(event)}
                    />
                  </label>
                </li>
                <li>
                  <label htmlFor="tel">
                    Telephone
                    <input
                      type="text"
                      name="tel"
                      placeholder="Telephone number"
                      id="tel"
                      value={tel}
                      onChange={event => handleChange(event)}
                    />
                  </label>
                </li>
                <li>
                  <label htmlFor="username">
                    Username
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Choose a username"
                      value={username}
                      onChange={event => handleChange(event)}
                    />
                  </label>
                </li>
                <li>
                  <label htmlFor="passowrd">
                    Password
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter a password"
                      value={password}
                      onChange={event => handleChange(event)}
                    />
                  </label>
                </li>
                <li>
                  <S3UploadContainer />
                </li>
              </ul>

              <h3 className="newrecipient__form__heading">Tell people three things about yourself</h3>
              <ul>
                <li>
                  <input
                    className="nolabel"
                    type="text"
                    name="bio1"
                    placeholder="I play..."
                    value={bio1}
                    onChange={event => handleChange(event)}
                  />
                </li>
                <li>
                  <input
                    className="nolabel"
                    type="text"
                    name="bio2"
                    placeholder="I like..."
                    value={bio2}
                    onChange={event => handleChange(event)}
                  />
                </li>
                <li>
                  <input
                    className="nolabel"
                    type="text"
                    name="bio3"
                    placeholder="I enjoy..."
                    value={bio3}
                    onChange={event => handleChange(event)}
                  />
                </li>

              </ul>
              <button className="btn btn__primary btn__submit" type="submit">
                Create account
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
  setInputField: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  tel: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  bio1: PropTypes.string,
  bio2: PropTypes.string,
  bio3: PropTypes.string,
  recipientIdForQrCode: PropTypes.number,
};

NewRecipient.defaultProps = {
  lastName: '',
  tel: '',
  username: '',
  password: '',
  bio1: '',
  bio2: '',
  bio3: '',
  recipientIdForQrCode: null,
};
export default NewRecipient;

// <form onSubmit={handleSubmit}>
//     <ul>
//         <li>
//             <input
//                 type="text"
//                 name="firstName"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.firstName}
//                 placeholder="Enter your first name"
//                 className={setInputClass(errors.firstName, touched.firstName)}
//             />
//             {setMessageStyle(errors, touched, values, 'firstName')}
//         </li>
//         <li>
//             <input
//                 type="email"
//                 name="email"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.email}
//                 placeholder="Enter your email"
//                 className={setInputClass(errors.email, touched.email)}
//             />
//             {setMessageStyle(errors, touched, values, 'email')}
//         </li>
//         <li>
//             <input
//                 type="password"
//                 name="password"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.password}
//                 placeholder="Enter a password"
//                 className={setInputClass(errors.password, touched.password)}
//             />
//             {setMessageStyle(errors, touched, values, 'password')}
//         </li>
//         <li>
//             <button type="submit" disabled={isSubmitting}>
//                 Create your account
//         </button>
//         </li>
//     </ul>
// </form>