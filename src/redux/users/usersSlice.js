import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, deleteUser, addUser } from './usersOperations';

const usersInitialState = { users: [], isLoading: false, error: false };

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,

  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      // ==================================
      .addCase(deleteUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = state.users.filter(user => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      // =========================================
      .addCase(addUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = [...state.users, action.payload];
      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const usersReducer = usersSlice.reducer;
