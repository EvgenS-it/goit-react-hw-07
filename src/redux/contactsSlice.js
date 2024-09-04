import { createSlice } from '@reduxjs/toolkit';

import contactsFromServer from '../contactsFromServer.json';

const INITIAL_STATE = {
  contacts: {
    items: [...contactsFromServer],
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

// Vanila redux logic
// export const contactsReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return {
//         ...state,
//         contacts: {
//           items: [...state.contacts.items, action.payload],
//         },
//       };
//     }

//     case 'contacts/deleteContact': {
//       return {
//         ...state,
//         contacts: {
//           items: state.contacts.items.filter(
//             contact => contact.id !== action.payload
//           ),
//         },
//       };
//     }

//     default:
//       return state;
//   }
// };

// // action
// export const addContact = payload => {
//   return {
//     type: 'contacts/addContact',
//     payload,
//   };
// };

// // action
// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };
