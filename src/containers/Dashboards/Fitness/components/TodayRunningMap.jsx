import React from 'react';
import { GoogleMap, KmlLayer } from '@react-google-maps/api';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const mapContainerStyle = {
  height: '360px',
};

const center = {
  lat: 41.876,
  lng: -87.624,
};

const TodayRunningMap = ({ t }) => (
  <Panel xs={12} lg={12} xl={9} md={12} title={t('dashboard_fitness.today_running_map')}>
    <GoogleMap
      id="todayRunningMap"
      mapContainerStyle={mapContainerStyle}
      zoom={11}
      center={center}
    >
      <KmlLayer url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml" />
    </GoogleMap>
  </Panel>
);

TodayRunningMap.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(TodayRunningMap);
