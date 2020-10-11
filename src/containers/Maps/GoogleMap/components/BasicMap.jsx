import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { GoogleMap } from '@react-google-maps/api';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const containerStyle = {
  height: '360px',
};

const center = {
  lat: 56.009483,
  lng: 92.8121694,
};

const BasicMap = ({ t }) => (
  <Col xs={12} md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('maps.google_map.basic_map')}</h5>
        </div>
        <GoogleMap
          id="basicMap"
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
        />
      </CardBody>
    </Card>
  </Col>
);

BasicMap.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(BasicMap);
