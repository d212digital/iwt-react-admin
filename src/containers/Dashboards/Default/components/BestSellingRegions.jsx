import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  GoogleMap, MarkerClusterer, Marker,
} from '@react-google-maps/api';
import Panel from '../../../../shared/components/Panel';
import data from './data.json';

const containerStyle = {
  height: '360px',
};

const center = {
  lat: 25.0391667,
  lng: 121.525,
};

const locations = data.photos.map(marker => ({
  lat: marker.latitude,
  lng: marker.longitude,
}));

const createKey = (location, index) => location.lat + location.lng + index;

const BestSellingRegions = ({ t }) => (
  <Panel xs={12} md={12} lg={12} xl={8} title={t('dashboard_default.best_selling')}>
    <div dir="ltr">
      <GoogleMap
        id="bestSellingRegionsMap"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3}
      >
        <MarkerClusterer
          options={data.photos}
        >
          {clusterer => locations.map((location, index) => (
            <Marker key={createKey(location, index)} position={location} clusterer={clusterer} />
          ))}
        </MarkerClusterer>
      </GoogleMap>
    </div>
  </Panel>
);

BestSellingRegions.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(BestSellingRegions);
