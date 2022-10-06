import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.users = 1;
    },
    deleteUser: (state, action) => {
      state.users = 2;
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
