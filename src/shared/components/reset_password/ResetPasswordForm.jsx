import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, Form } from 'redux-form';
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon';
import { Button } from 'reactstrap';

const ResetPasswordForm = ({
  handleSubmit, fieldUser,
}) => (
  <Form className="form reset-password-form" onSubmit={handleSubmit}>
    <div className="form__form-group">
      <div>
        <span className="form__form-group-label">{fieldUser}</span>
      </div>
      <div className="form__form-group-field">
        <div className="form__form-group-icon">
          <AlternateEmailIcon />
        </div>
        <Field
          name="email"
          id="email"
          component="input"
          type="email"
          placeholder="example@mail.com"
          className="input-without-border-radius"
        />
      </div>
    </div>
    <Button className="account__btn" color="primary">
      Reset Password
    </Button>
  </Form>
);

ResetPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fieldUser: PropTypes.shape(),
};

ResetPasswordForm.defaultProps = {
  fieldUser: null,
};

export default reduxForm()(ResetPasswordForm);
