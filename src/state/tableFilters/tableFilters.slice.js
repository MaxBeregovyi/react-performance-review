import { createSlice } from '@reduxjs/toolkit';
import { getLanguages } from './tableFilters.thunk.js';

const initialState = {
  loading: false,
  availableLanguages: [
    {
      id: 999,
      name: 'All',
    },
  ],
  selectedLanguage: 'all',
  lastReview: '',
};

const tableFilterSlice = createSlice({
  name: 'tableFilters',
  initialState,
  reducers: {
    updateSelectedLanguage: (state, action) => {
      state.updateSelectedLanguage = action.payload;
    },
    updateReview: (state, action) => {
      state.updateReview = action.payload;
    },
    // getAvailableLanguages: (state, action) => {
    //   state.getAvailableLanguages = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getLanguages.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.availableLanguages = [
        {
          id: 999,
          name: 'All',
        },

        ...action.payload,
      ];
      state.loading = false;
    });
    builder.addCase(getLanguages.rejected, (state, action) => {
      state.errorText = action.payload;
      state.loading = false;
    });
  },
});

export const { updateSelectedLanguage, updateReview } =
  tableFilterSlice.actions;

export default tableFilterSlice.reducer;
