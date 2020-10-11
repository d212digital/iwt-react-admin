import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import renderTimePickerField from '../../../../shared/components/form/TimePicker';

const TimePickers = ({ handleSubmit, t, themeName }) => (
  <Col xs={12} md={12} lg={12} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('forms.from_picker.time_picker')}</h5>
        </div>
        <form className="form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form__form-group">
            <span className="form__form-group-label">Default Time Picker</span>
            <Field
              name="time"
              component={renderTimePickerField}
              theme={themeName}
            />
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Twelve hours mode</span>
            <Field
              name="time_twelve"
              component={renderTimePickerField}
              timeMode
              theme={themeName}
            />
          </div>
        </form>
      </CardBody>
    </Card>
  </Col>
);

TimePickers.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  themeName: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};
export default connect(state => ({ themeName: state.theme.className }))(reduxForm({
  form: 'time_picker_form', // a unique identifier for this form
})(withTranslation('common')(TimePickers)));
