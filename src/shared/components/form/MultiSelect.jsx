import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const MultiSelectField = ({
  value, name, placeholder, options, onChange,
}) => {
  const handleChange = (handleChangeValue) => {
    onChange(handleChangeValue);
  };

  return (
    <Select
      isMulti
      name={name}
      value={value}
      onChange={handleChange}
      options={options}
      clearable={false}
      closeOnSelect={false}
      removeSelected={false}
      className="react-select"
      placeholder={placeholder}
      classNamePrefix="react-select"
    />
  );
};

MultiSelectField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })),
  ]).isRequired,
};

MultiSelectField.defaultProps = {
  placeholder: '',
  options: [],
};

const renderMultiSelectField = ({
  input, meta, options, placeholder,
}) => (
  <div className="form__form-group-input-wrap">
    <MultiSelectField
      {...input}
      options={options}
      placeholder={placeholder}
    />
    {meta.touched && meta.error && <span className="form__form-group-error">{meta.error}</span>}
  </div>
);

renderMultiSelectField.propTypes = {
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
};

renderMultiSelectField.defaultProps = {
  meta: null,
  options: [],
  placeholder: '',
};

export default renderMultiSelectField;
