const initialStore = {
  selectedLanguage: 'all',
  lastReview: '',
};

export const tableFilterReducer = (state = initialStore, action) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_LANGUAGE':
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    case 'UPDATE_REVIEW':
      return {
        ...state,
        lastReview: action.payload,
      };
    default:
      return state;
  }
};
