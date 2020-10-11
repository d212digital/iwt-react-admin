import React from 'react';
import PropTypes from 'prop-types';
import { CustomizerProps } from '../../../shared/prop-types/ReducerProps';

const ToggleShadow = ({ toggleBoxShadow, customizer }) => (
  <label className="toggle-btn customizer__toggle" htmlFor="shadow_toggle">
    <input
      className="toggle-btn__input"
      type="checkbox"
      name="shadow_toggle"
      id="shadow_toggle"
      checked={customizer.withBoxShadow}
      onChange={toggleBoxShadow}
    />
    <span className="toggle-btn__input-label" />
    <span>{'Block\'s Shadows'}</span>
  </label>
);

ToggleShadow.propTypes = {
  customizer: CustomizerProps.isRequired,
  toggleBoxShadow: PropTypes.func.isRequired,
};

export default ToggleShadow;
