import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { app } from '../../firebase.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getLanguages = () => (dispatch, getState) => {
// const db = getFirestore(app);
//
// if (getState().tableFilterReducer.availableLanguages.length <= 1) {
//   getDocs(query(collection(db, 'language')))
//     .then((q) => {
//       let temp = [];
//       q.forEach((item) => {
//         temp.push(item.data());
//       });
//       return temp;
//     })
//     .then((res) => dispatch(getAvailableLanguagesActions(res)))
//     .catch((e) => alert(e));
// }
// };

export const getLanguages = createAsyncThunk(
  'tableFilters/getLanguages',
  async (_, { getState }) => {
    const db = getFirestore(app);

    if (getState().tableFilter.availableLanguages.length <= 1) {
      return getDocs(query(collection(db, 'language')))
        .then((q) => {
          let temp = [];
          q.forEach((item) => {
            temp.push(item.data());
          });
          return temp;
        })
        .then((res) => res)
        .catch((e) => alert(e));
    }
  },
);
