import {
  UPDATE_SELECTED_LANGUAGE,
  UPDATE_LAST_REVIEW,
  GET_AVAILABLE_LANGUAGES,
} from './tableFilters.constants.js';

export const updateSelectedLanguageActions = (payload) => ({
  type: UPDATE_SELECTED_LANGUAGE,
  payload,
});
export const updateReviewActions = (payload) => ({
  type: UPDATE_LAST_REVIEW,
  payload,
});
export const getAvailableLanguagesActions = (payload) => ({
  type: GET_AVAILABLE_LANGUAGES,
  payload,
});
