import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

import * as api from 'shared/services/contacts-api';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch-all',

  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      toast.error(` Sorry,${response.data}`);
      return thunkAPI.rejectWithValue(response.data.massage);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/add',

  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContacts(data);
      return result;
    } catch ({ response }) {
      toast.error(` Sorry,${response.data}`);
      return rejectWithValue(response.data.massage);
    }
  },
  {
    condition: ({ name, number }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const phoneNumber = number;

      const result = contacts.items.find(
        ({ name, number }) =>
          name.toLowerCase() === normalizedName && number === phoneNumber
      );

      if (result) {
        toast.error(`${name}: ${number} is already in contacts!`);
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contact/delete',

  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContacts(id);
      return id;
    } catch ({ response }) {
      toast.error(` Sorry,${response.data}`);
      return rejectWithValue(response.data.massage);
    }
  }
);
