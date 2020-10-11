import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { isMobileOnly } from 'react-device-detect';
import PropTypes from 'prop-types';

const DatePickerField = ({ onChange }) => {
  const [startDate, setStartDate] = useState(null);
  const handleChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <div className="date-picker">
      <DatePicker
        className="form__form-group-datepicker"
        selected={startDate}
        onChange={handleChange}
        dateFormat="yyyy/MM/dd"
        dropDownMode="select"
        popperPlacement="center"
        withPortal={isMobileOnly}
      />
    </div>
  );
};

DatePickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
};

const renderDatePickerField = ({ input }) => <DatePickerField {...input} />;

renderDatePickerField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
};

export default renderDatePickerField;
