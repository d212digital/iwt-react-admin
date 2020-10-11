import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const ToggleButtonField = ({
  onChange, defaultChecked, name, disabled, value,
}) => {
  useEffect(() => {
    onChange(defaultChecked);
  }, [onChange, defaultChecked]);

  return (
    <div className="toggle-btn">
      <input
        className="toggle-btn__input"
        type="checkbox"
        name={name}
        onChange={onChange}
        checked={value}
        disabled={disabled}
      />
      <button
        type="button"
        className="toggle-btn__input-label"
        onClick={() => onChange(!value)}
      >Toggle
      </button>
    </div>
  );
};

ToggleButtonField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
};

ToggleButtonField.defaultProps = {
  defaultChecked: false,
  disabled: false,
};

const renderToggleButtonField = ({ input, defaultChecked, disabled }) => (
  <ToggleButtonField
    {...input}
    defaultChecked={defaultChecked}
    disabled={disabled}
  />
);

renderToggleButtonField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
};

renderToggleButtonField.defaultProps = {
  defaultChecked: false,
  disabled: false,
};

export default renderToggleButtonField;
