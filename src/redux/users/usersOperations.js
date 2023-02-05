import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/getAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('http://localhost:8080/users');
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id, rejectWithValue) => {
    try {
      await axios.delete(`http://localhost:8080/users/${id}`, {
        headers: {
          authorization: 'admin',
        },
      });
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/addUser',
  async (newUser, rejectWithValue) => {
    try {
      const { data } = await axios.post(`http://localhost:8080/users`, newUser);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
