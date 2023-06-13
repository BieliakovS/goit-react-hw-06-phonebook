import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onFilterChange, filterValue }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilterChange}
        placeholder="Search contacts"
      />
    </label>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
