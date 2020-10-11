import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import NewOrderEditForm from './components/NewOrderEditForm';
import { changeNewOrderTableData, loadNewOrderTableData } from '../../../redux/actions/newOrderTableActions';

class ECommerceDashboardEdit extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    match: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(loadNewOrderTableData(match.params.index));
  }

  handleSubmit = (formValues) => {
    const { dispatch, match } = this.props;
    dispatch(changeNewOrderTableData(formValues, match.params.index));
    this.setState({ redirect: true });
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/dashboard_e_commerce" />;
    }

    return (
      <Container className="dashboard">
        <Row>
          <NewOrderEditForm onSubmit={this.handleSubmit} />
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  newOrder: state.newOrder,
});

export default connect(mapStateToProps)(ECommerceDashboardEdit);
