import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import Map from './components/Map';
import { fetchCovidData } from './redux/actions';

class VectorMapWithRequestData extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    fetchCovidData: PropTypes.func.isRequired,
    covidData: PropTypes.shape(),
  };

  static defaultProps = {
    covidData: null,
  };

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchCovidData();
  }

  render() {
    const { t, covidData } = this.props;
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className="page-title">{t('maps.vector_map.with_api_request')}</h3>
            <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
            </h3>
          </Col>
        </Row>
        <Row>
          <Map
            mapData={covidData && covidData.mapData}
          />
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  covidData: state.covid.data,
});

const mapDispatchToProps = {
  fetchCovidData,
};

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(VectorMapWithRequestData));
