import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TimePicker from 'rc-time-picker';
import AvTimerIcon from 'mdi-react/AvTimerIcon';
import classNames from 'classnames';

const TimePickerField = ({
  name, onChange, timeMode, theme,
}) => {
  const [opened, setOpened] = useState(false);
  const btnClass = classNames({
    'form__form-group-button': true,
    active: opened,
  });

  const toggleOpen = () => {
    setOpened(!opened);
  };

  return (
    <div className="form__form-group-field">
      <TimePicker
        open={opened}
        onOpen={setOpened}
        onClose={setOpened}
        name={name}
        onChange={onChange}
        showSecond={false}
        popupClassName={theme === 'theme-dark' ? 'theme-dark' : 'theme-light'}
        use12Hours={timeMode}
      />
      <button
        className={btnClass}
        type="button"
        onClick={() => {
          toggleOpen();
        }}
      >
        <AvTimerIcon />
      </button>
    </div>
  );
};

TimePickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  timeMode: PropTypes.bool.isRequired,
  theme: PropTypes.string,
};

TimePickerField.defaultProps = {
  theme: 'theme-light',
};

const renderTimePickerField = ({ input, timeMode, theme }) => (
  <TimePickerField
    {...input}
    timeMode={timeMode}
    theme={theme}
  />
);

renderTimePickerField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  timeMode: PropTypes.bool,
  theme: PropTypes.string,
};

renderTimePickerField.defaultProps = {
  timeMode: false,
  theme: null,
};

export default renderTimePickerField;
