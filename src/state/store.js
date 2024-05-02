import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import tableFilter from '../state/tableFilters/tableFilters.slice.js';

const store = configureStore({
  reducer: {
    tableFilter,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createLogger({ collapsed: true })),
});

export default store;
