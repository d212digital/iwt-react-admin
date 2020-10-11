import React, { useState } from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import { connect } from 'react-redux';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Alert, Button } from 'reactstrap';
import renderCheckBoxField from '../form/CheckBox';

const LogInForm = ({
  handleSubmit, errorMessage, errorMsg, fieldUser, typeFieldUser, form,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Form className="form login-form" onSubmit={handleSubmit}>
      <Alert
        color="danger"
        isOpen={!!errorMessage || !!errorMsg}
      >
        {errorMessage}
        {errorMsg}
      </Alert>
      <div className="form__form-group">
        <span className="form__form-group-label">{fieldUser}</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <AccountOutlineIcon />
          </div>
          <Field
            name="username"
            component="input"
            type={typeFieldUser}
            placeholder={fieldUser}
            className="input-without-border-radius"
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Password</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <KeyVariantIcon />
          </div>
          <Field
            name="password"
            component="input"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="input-without-border-radius"
          />
          <button
            type="button"
            className={`form__form-group-button${showPassword ? ' active' : ''}`}
            onClick={showPasswordToggle}
          ><EyeIcon />
          </button>
          <div className="account__forgot-password">
            <NavLink to="/reset_password">Forgot a password?</NavLink>
          </div>
        </div>
      </div>
      <div className="form__form-group">
        <div className="form__form-group form__form-group-field">
          <Field
            name={`remember_me-${form}`}
            component={renderCheckBoxField}
            label="Remember me"
          />
        </div>
      </div>
      <div className="account__btns">
        {
          form === 'modal_login'
            ? <Button className="account__btn" type="submit" color="primary">Sign In</Button>
            : (
              <NavLink className="account__btn btn btn-primary" to="/dashboard_default">
                Sign In
              </NavLink>
            )
        }

        <NavLink className="btn btn-outline-primary account__btn" to="/register">Create
          Account
        </NavLink>
      </div>
    </Form>
  );
};

LogInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  errorMsg: PropTypes.string,
  fieldUser: PropTypes.string,
  typeFieldUser: PropTypes.string,
  form: PropTypes.string.isRequired,
};

LogInForm.defaultProps = {
  errorMessage: '',
  errorMsg: '',
  fieldUser: 'Username',
  typeFieldUser: 'text',
};

export default connect(state => ({
  errorMsg: state.user.error,
}))(reduxForm()(LogInForm));
