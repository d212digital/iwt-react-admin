/* eslint-disable no-return-assign,react/destructuring-assignment */
import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import NotificationSystem from 'rc-notification';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import BasicNotifications from './components/BasicNotifications';
import ImageNotifications from './components/ImageNotifications';
import ColorStates from './components/ColorStates';
import ColorStatesFullWidth from './components/ColorStatesFullWidth';
import { RTLProps, ThemeProps } from '../../../shared/prop-types/ReducerProps';

let notificationLU = null;
let notificationRU = null;
let notificationTC = null;

class Notifications extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    rtl: RTLProps.isRequired,
    theme: ThemeProps.isRequired,
  };

  componentDidMount() {
    NotificationSystem.newInstance({ style: { top: 65 } }, n => notificationLU = n);
    NotificationSystem.newInstance({ style: { top: 65 } }, n => notificationRU = n);
    NotificationSystem.newInstance({ style: { top: 65 } }, n => notificationTC = n);
  }

  componentWillUnmount() {
    notificationLU.destroy();
    notificationRU.destroy();
    notificationTC.destroy();
  }

  showNotification = ({ notification, position }, rtl) => {
    const notificationDefaultProps = {
      content: notification(this.props.theme),
      duration: 5,
      closable: true,
      className: `${position} ${rtl}-support`,
    };
    switch (position) {
      case 'left-up':
        notificationLU.notice(notificationDefaultProps);
        // eslint-disable-next-line no-case-declarations
        const leftUpNotificationIntervalKey = setInterval(() => {
          notificationLU.notice({
            ...notificationDefaultProps,
            content: notification(this.props.theme),
            style: { top: 0, left: 0 },
            className: `${position} ${rtl}-support`,
            onClose() {
              setTimeout(() => { clearInterval(leftUpNotificationIntervalKey); });
            },
          });
        }, 100);
        setTimeout(() => { clearInterval(leftUpNotificationIntervalKey); }, 5000);
        break;
      case 'right-up':
        notificationRU.notice(notificationDefaultProps);
        // eslint-disable-next-line no-case-declarations
        const rightUpNotificationIntervalKey = setInterval(() => {
          notificationRU.notice({
            ...notificationDefaultProps,
            content: notification(this.props.theme),
            style: { top: 0, left: 'calc(100vw - 100%)' },
            className: `${position} ${rtl}-support`,
            onClose() {
              setTimeout(() => { clearInterval(rightUpNotificationIntervalKey); });
            },
          });
        }, 100);
        setTimeout(() => { clearInterval(rightUpNotificationIntervalKey); }, 5000);
        break;
      default:
        notificationTC.notice({
          ...notificationDefaultProps,
          style: { top: 0, left: 0 },
        });
        break;
    }
  };

  render() {
    const { t, rtl, theme } = this.props;
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className="page-title">{t('ui_elements.notifications.title')}</h3>
            <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
            </h3>
          </Col>
        </Row>
        <Row>
          <BasicNotifications
            theme={theme}
            showNotification={
              ({ notification, position }) => this.showNotification({ notification, position }, rtl.direction)
            }
          />
          <ImageNotifications
            theme={theme}
            showNotification={
              ({ notification, position }) => this.showNotification({ notification, position }, rtl.direction)
            }
          />
          <ColorStates
            theme={theme}
            showNotification={
              ({ notification, position }) => this.showNotification({ notification, position }, rtl.direction)
            }
          />
          <ColorStatesFullWidth
            showNotification={
              ({ notification, position }) => this.showNotification({ notification, position }, rtl.direction)
            }
          />
        </Row>
      </Container>
    );
  }
}

export default compose(withTranslation('common'), connect(state => ({
  rtl: state.rtl,
  theme: state.theme,
})))(Notifications);
