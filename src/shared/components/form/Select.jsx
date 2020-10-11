import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const SelectField = ({
  onChange, value, name, placeholder, options,
}) => {
  const handleChange = (selectedOption) => {
    onChange(selectedOption);
  };

  return (
    <Select
      name={name}
      value={value}
      onChange={handleChange}
      options={options}
      clearable={false}
      className="react-select"
      placeholder={placeholder}
      classNamePrefix="react-select"
    />
  );
};

SelectField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ]).isRequired,
};

SelectField.defaultProps = {
  placeholder: '',
  options: [],
};

const renderSelectField = ({
  input, meta, options, placeholder, className,
}) => (
  <div className={`form__form-group-input-wrap ${className}`}>
    <SelectField
      {...input}
      options={options}
      placeholder={placeholder}
    />
    {meta.touched && meta.error && <span className="form__form-group-error">{meta.error}</span>}
  </div>
);

renderSelectField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

renderSelectField.defaultProps = {
  meta: null,
  options: [],
  placeholder: '',
  className: '',
};

export default renderSelectField;
