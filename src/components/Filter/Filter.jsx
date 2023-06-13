import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../reducers/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = event => {
    const newFilter = event.currentTarget.value;
    dispatch(setFilter(newFilter));
  };

  return (
    <label>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts"
      />
    </label>
  );
};

export default Filter;
