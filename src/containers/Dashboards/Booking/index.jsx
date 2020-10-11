import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TotalProfitEarned from './components/TotalProfitEarned';
import TotalCustomers from './components/TotalCustomers';
import TotalBookings from './components/TotalBookings';
import BookingCancels from './components/BookingCancels';
import Reservations from './components/Reservations';
import WeeklyStat from './components/WeeklyStat';
import Occupancy from './components/Occupancy';
import { RTLProps } from '../../../shared/prop-types/ReducerProps';

const BookingDashboard = ({ t, rtl }) => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('dashboard_booking.page_title')}</h3>
      </Col>
    </Row>
    <Row>
      <TotalProfitEarned />
      <TotalBookings />
      <TotalCustomers />
      <BookingCancels />
    </Row>
    <Row>
      <Reservations dir={rtl.direction} />
      <WeeklyStat />
      <Occupancy dir={rtl.direction} />
    </Row>
  </Container>
);

BookingDashboard.propTypes = {
  t: PropTypes.func.isRequired,
  rtl: RTLProps.isRequired,
};

export default connect(state => ({
  rtl: state.rtl,
}))(withTranslation('common')(BookingDashboard));
