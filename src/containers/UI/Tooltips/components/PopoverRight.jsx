import React, { Component } from 'react';
import {
  ButtonToolbar, Card, CardBody, Col, Button, Popover, PopoverBody, PopoverHeader,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class PopoverRight extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    dir: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      popoverOpen: false,
    };
  }

  toggle = () => {
    this.setState(prevState => ({ popoverOpen: !prevState.popoverOpen }));
  };

  render() {
    const { t, dir } = this.props;
    const { popoverOpen } = this.state;

    return (
      <Col sm={12} md={6} lg={6} xl={3} className="card-tooltip">
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">{t('ui_elements.tooltips_popovers.popover_on_right')}</h5>
              <h5 className="subhead">Use popover with placement <span className="red-text">right</span></h5>
            </div>
            <ButtonToolbar className="btn-toolbar--center">
              <Button id="PopoverRight" onClick={this.toggle} outline className="button-tooltip">
                Popover on Right
              </Button>
              <Popover
                placement="right"
                isOpen={popoverOpen}
                target="PopoverRight"
                toggle={this.toggle}
                dir={dir}
              >
                <PopoverHeader>Popover on Right</PopoverHeader>
                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem
                  lacinia quam venenatis vestibulum.
                </PopoverBody>
              </Popover>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default withTranslation('common')(PopoverRight);
