import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Card, CardBody, Col } from 'reactstrap';
import { connect } from 'react-redux';
import EditTable from '../../../../shared/components/table/EditableTable';

const basicTheme = {
  height: '100%', width: '100%', boxShadow: '0', border: '1px solid',
};

const blackTheme = {
  ...basicTheme,
  background: '#2a2a31',
  color: '#dddddd',
};

const EditorInput = ({
  value, onChange, onBlur, themeName,
}) => (
  <input
    value={value}
    style={themeName === 'theme-dark' ? blackTheme : basicTheme}
    onChange={onChange}
    onBlur={onBlur}
  />
);

EditorInput.propTypes = {
  value: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

const ConnectedEditorInput = connect(state => ({ themeName: state.theme.className }))(EditorInput);

class EditorTheme extends Component {
  static propTypes = {
    onCommit: PropTypes.func.isRequired,
    column: PropTypes.shape({
      key: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = { value: null, oldValue: null };

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.oldValue) {
      return {
        value: props.value,
        oldValue: props.value,
      };
    }
    return null;
  }

  getValue() {
    const { value } = this.state;
    const { column } = this.props;
    return { [column.key]: value };
  }

  getInputNode() {
    // eslint-disable-next-line react/no-find-dom-node
    return ReactDOM.findDOMNode(this).getElementsByTagName('input')[0];
  }

  handleChangeComplete = () => {
    const { onCommit } = this.props;
    onCommit();
  };

  handleInput = (e) => {
    this.setState({ value: e.target.value });
  };


  render() {
    const { value } = this.state;
    return (
      <ConnectedEditorInput
        value={value}
        onChange={this.handleInput}
        onBlur={this.handleChangeComplete}
      />
    );
  }
}

export default class EditableTable extends Component {
  constructor() {
    super();
    this.heads = [
      {
        key: 'id',
        name: '#',
        width: 80,
      },
      {
        key: 'first',
        name: 'First Name',
        editable: true,
        editor: EditorTheme,
      },
      {
        key: 'last',
        name: 'Last Name',
        editable: true,
        editor: EditorTheme,
      },
      {
        key: 'user',
        name: 'Username',
        editable: true,
        editor: EditorTheme,
      },
      {
        key: 'age',
        name: 'Age',
        editable: true,
        editor: EditorTheme,
      },
      {
        key: 'date',
        name: 'Date',
        editable: true,
        editor: EditorTheme,
      },
      {
        key: 'location',
        name: 'Location',
        editable: true,
        editor: EditorTheme,
      },
      {
        key: 'work',
        name: 'Work',
        editable: true,
        editor: EditorTheme,
      },
    ];

    this.state = { rows: this.createRows(10) };
  }

  getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
    - start.getTime()))).toLocaleDateString();

  createRows = (numberOfRows) => {
    const rows = [];
    for (let i = 1; i < numberOfRows + 1; i += 1) {
      rows.push({
        id: i,
        first: ['Maria', 'Bobby  ', 'Alexander'][Math.floor((Math.random() * 3))],
        last: ['Morisson', 'Brown  ', 'Medinberg'][Math.floor((Math.random() * 3))],
        user: ['@dragon', '@hamster', '@cat'][Math.floor((Math.random() * 3))],
        age: Math.min(100, Math.round(Math.random() * 30) + 20),
        date: this.getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
        location: ['Melbourne', 'Tokio', 'Moscow', 'Rome'][Math.floor((Math.random() * 4))],
        work: ['Nova Soft', 'Dog Shop', 'Aspirity', 'Business Bro', 'Starlight'][Math.floor((Math.random() * 5))],
      });
    }
    return rows;
  };

  render() {
    const { rows } = this.state;

    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Editable table</h5>
              <h5 className="subhead">Use table with {'column\'s'} option
                <span className="red-text"> editable</span>
              </h5>
            </div>
            <EditTable heads={this.heads} rows={rows} />
          </CardBody>
        </Card>
      </Col>
    );
  }
}
