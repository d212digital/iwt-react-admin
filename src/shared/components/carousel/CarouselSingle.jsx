import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { RTLProps } from '../../prop-types/ReducerProps';

const CarouselSingle = ({ children, rtl }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: rtl.direction === 'rtl',
  };

  return (
    <Slider {...settings} className="slick-slider--single">
      {children}
    </Slider>
  );
};

CarouselSingle.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  rtl: RTLProps.isRequired,
};

export default connect(state => ({
  rtl: state.rtl,
}))(CarouselSingle);
