import React from 'react';
import PropTypes from 'prop-types';

const FileInputField = ({ onChange, name, value }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const files = [...e.target.files];
    onChange({ file: files[0], name: files[0].name });
  };

  return (
    <div className="form__form-group-file">
      <label htmlFor={name}>Choose the file</label>
      <span>{value.name}</span>
      <input
        type="file"
        name={name}
        id={name}
        onChange={handleChange}
      />
    </div>
  );
};

FileInputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.shape({
      name: PropTypes.string,
    }),
    PropTypes.string,
  ]),
};

FileInputField.defaultProps = {
  value: null,
};

const renderFileInputField = ({ input, meta }) => (
  <div className="form__form-group-input-wrap">
    <FileInputField {...input} />
    {meta.touched && meta.error && <span className="form__form-group-error">{meta.error}</span>}
  </div>
);

renderFileInputField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

renderFileInputField.defaultProps = {
  meta: null,
};

export default renderFileInputField;
