import { combineReducers } from 'redux';
import contacts from './contactsSlice';
import filter from './filterSlice';

const rootReducer = combineReducers({
  contacts,
  filter,
});

export default rootReducer;
