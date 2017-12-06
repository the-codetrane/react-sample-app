// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './action_creators';

const Header = (props: {
  showSearch?: boolean,
  handleSearchTermChange: Function,
  searchTerm: string
}) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input
        type="text"
        onChange={props.handleSearchTermChange}
        value={props.searchTerm}
        placeholder="Search"
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">svideo</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDistpatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDistpatchToProps)(Header);
