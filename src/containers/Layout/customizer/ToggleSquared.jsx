import React from 'react';
import PropTypes from 'prop-types';
import { CustomizerProps } from '../../../shared/prop-types/ReducerProps';

const ToggleSquared = ({ changeBorderRadius, customizer }) => (
  <label className="toggle-btn customizer__toggle" htmlFor="square_toggle">
    <input
      className="toggle-btn__input"
      type="checkbox"
      name="square_toggle"
      id="square_toggle"
      checked={customizer.squaredCorners}
      onChange={changeBorderRadius}
    />
    <span className="toggle-btn__input-label" />
    <span>Squared borders</span>
  </label>
);

ToggleSquared.propTypes = {
  customizer: CustomizerProps.isRequired,
  changeBorderRadius: PropTypes.func.isRequired,
};

export default ToggleSquared;
