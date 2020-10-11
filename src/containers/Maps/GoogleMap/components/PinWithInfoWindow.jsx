import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import {
  GoogleMap, Marker, InfoWindow,
} from '@react-google-maps/api';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const containerStyle = {
  height: '360px',
};

const center = {
  lat: 56.009483,
  lng: 92.8121694,
};

class PinWithInfoWindow extends React.Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  state = {
    isOpen: true,
  }

  onToggleIsOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { t } = this.props;
    const { isOpen } = this.state;
    return (
      <Col xs={12} md={12} lg={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">{t('maps.google_map.pin_with_info_window')}</h5>
            </div>
            <GoogleMap
              id="infoWindowMap"
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
            >
              <Marker
                position={center}
                onClick={() => {
                  this.onToggleIsOpen();
                }}
              >
                {isOpen
                && (
                  <InfoWindow
                    options={{ closeBoxURL: '', enableEventPropagation: true }}
                  >
                    <div className="map__marker-label-content">
                      DRAKARYS!!!
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            </GoogleMap>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default withTranslation('common')(PinWithInfoWindow);
