import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class AccountForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      showPassword: false,
    };

    this.showPassword = this.showPassword.bind(this);
  }

  showPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }));
  }

  render() {
    const { handleSubmit } = this.props;
    const { showPassword } = this.state;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__form-group form__form-group--forgot">
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
            />
            <button
              className={`form__form-group-button${showPassword ? ' active' : ''}`}
              type="button"
              onClick={() => {
                this.showPassword();
              }}
            ><EyeIcon />
            </button>
          </div>
          <div className="account__forgot-password">
            <NavLink to="/reset_password">Forgot a password?</NavLink>
          </div>
        </div>
        <NavLink className="btn btn-primary account__btn" to="/dashboard_default">Unlock</NavLink>
        <NavLink className="btn btn-outline-danger account__btn" to="/dashboard_default">Logout</NavLink>
      </form>
    );
  }
}

export default reduxForm({
  form: 'account_lock_form', // a unique identifier for this form
})(AccountForm);
