import React from 'react';
import {
  Card, CardBody, Col, Container, Row,
} from 'reactstrap';
import { StickyContainer, Sticky } from 'react-sticky';
import Navigation from '../navigation/Navigation';
import NavigationBottom from '../navigation/NavigationBottom';

const Changelog = () => (
  <Container className="documentation">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / FAQ Troubleshooting </h3>
      </Col>
    </Row>
    <StickyContainer>
      <Row className="documentation__main">
        <Col md={12} lg={3} xl={3} sm={12} xs={12} className="documentation__nav">
          <Sticky topOffset={-90} bottomOffset={95}>
            {({
              isSticky,
              style,
            }) => <Navigation active="faq" style={style} stick={isSticky} />}
          </Sticky>
        </Col>
        <Col md={12} lg={9} xl={9} sm={12} xs={12}>
          <Card className="card--not-full-height">
            <CardBody className="documentation__changelog">
              <p>Please be careful when you follow the instruction.</p>
              <br />
              <br />
              <p>
                The most of errors can appear during the installation of a libraries,
                launching a development version or creating a production version.
              </p>
              <br />
              <br />
              <p>
                If you have an error like &quot;Error: Cannot find module &apos;module_name&apos;&quot; you need to
                check the stage with the installation of a libraries. This error means that the module is not installed.
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </StickyContainer>
    <NavigationBottom prevLink="/documentation/changelog" prevTitle="Changelog" />
  </Container>
);

export default Changelog;
