import { combineReducers } from 'redux';
import { tableFilterReducer } from './tableFilters/tableFilters.reducer.js';
import { updateSelectedLanguage } from './tableFilters/tableFilters.actions.js';

export default combineReducers({
  tableFilterReducer,
});
