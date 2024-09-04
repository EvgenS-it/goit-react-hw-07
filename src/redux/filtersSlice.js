import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  filters: {
    name: '',
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;

// Vanila redux logic
// export const filtersReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'filter/changeFilter': {
//       return {
//         ...state,
//         filters: {
//           name: action.payload,
//         },
//       };
//     }
//     default:
//       return state;
//   }
// };

// // action
// export const changeFilter = payload => {
//   return {
//     type: 'filter/changeFilter',
//     payload,
//   };
// };
