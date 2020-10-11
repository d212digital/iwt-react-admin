import React from 'react';
import CloseIcon from 'mdi-react/CloseIcon';

const TopbarSearch = () => (
  <form className="topbar__search">
    <input placeholder="Search..." className="topbar__search-field" />
    <button className="topbar__btn topbar__search-btn" type="reset">
      <CloseIcon />
    </button>
  </form>
);

export default TopbarSearch;
