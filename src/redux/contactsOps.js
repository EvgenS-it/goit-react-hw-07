import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        'https://66d9926c4ad2f6b8ed553777.mockapi.io/contacts'
      );
      console.log('data:', data);
      return data; // all data will be added to action.payload in fullField status
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactApi = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await axios.delete(
        `https://66d9926c4ad2f6b8ed553777.mockapi.io/contacts/${contactId}`
      );
      console.log('deleted contact:', data);
      return data; // all data will be added to action.payload in fullField status
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const addContact = createAsyncThunk('contacts/addContact', async () => {
//   try {
//   } catch (error) {
//     console.log(error);
//   }
// });
