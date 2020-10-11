import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CustomizerProps, ThemeProps, RTLProps } from '../../shared/prop-types/ReducerProps';

const wrapperClass = (customizer) => {
  classNames({
    wrapper: true,
    'squared-corner-theme': customizer.squaredCorners,
    'blocks-with-shadow-theme': customizer.withBoxShadow,
    'top-navigation': customizer.topNavigation,
  });
};

const direction = (location, rtl) => (location.pathname === '/' ? 'ltr' : rtl.direction);

const MainWrapper = ({
  theme, customizer, children, rtl, location,
}) => (
  <div className={`${theme.className} ${direction(location, rtl)}-support`} dir={direction(location, rtl)}>
    <div className={wrapperClass(customizer)}>
      {children}
    </div>
  </div>
);

MainWrapper.propTypes = {
  customizer: CustomizerProps.isRequired,
  theme: ThemeProps.isRequired,
  rtl: RTLProps.isRequired,
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(connect(state => ({
  theme: state.theme,
  rtl: state.rtl,
  customizer: state.customizer,
}))(MainWrapper));

