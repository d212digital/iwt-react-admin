/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const Tabs = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Tabs</h5>
      </div>
      <p>Tabs are based on <a href="https://reactstrap.github.io/components/tabs/Tabs.jsx">reactstrap</a>. Example of
        using this component here:
      </p>
      <CodeHighlither>
        {`import React, { Component } from 'react';
import {
  Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import classnames from 'classnames';

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div>{/* this is tabs' wrapper */}
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              Sales
            </NavLink>
          </NavItem>
          {/* Add here more <NavItem> */}
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <p>Direction has strangers now believing.</p>
          </TabPane>
          {/* Add here more <TabPane> */}
        </TabContent>
      </div>
    );
  }
}`}
      </CodeHighlither>
      <p>To change tabs style you need to add className to <b>tabs' wrapper</b>:</p>
      <ol>
        <li><span className="red-text">'tabs--bordered-top'</span> to add accent border on top of active tab</li>
        <li><span className="red-text">'tabs--bordered-bottom'</span> to add accent border on bottom of active tab
        </li>
        <li><span className="red-text">'tabs--justify'</span> to justify tabs within container (can be combined with
          classes above)
        </li>
        <li><span className="red-text">'tabs--vertical'</span> to place tabs to the left from a tab panels</li>
        <li><span className="red-text">'tabs--vertical tabs--vertical-colored'</span> to place tabs to the left from
          a tab panels and fill background of active tab
        </li>
      </ol>
      <p>Stylesheet: <b>template/src/scss/components/tabs.scss</b></p>
    </CardBody>
  </Card>
);

export default Tabs;
