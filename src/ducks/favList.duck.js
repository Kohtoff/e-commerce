import { createSlice } from '@reduxjs/toolkit';
import { getItemIndexById } from '../utils/getItemIndexById';

const initialState = {
  favList: [],
};

const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    pushToList: ({ favList }, { payload }) => {
      if (getItemIndexById(payload.id, favList) !== -1) return;

      favList.push({ ...payload });
    },

    removeFromFavList: ({ favList }, { payload }) => {
      favList.splice(getItemIndexById(payload.id, favList))
    },
  },
});

const {reducer, actions} = favSlice;
export default reducer;
export const {pushToList, removeFromFavList} = actions;
export const selectFavList = (rootState) => rootState.fav;
