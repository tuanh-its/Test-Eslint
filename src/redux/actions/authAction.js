import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

const authAction = {
  login: createAction('LOGIN'),
  changePassword: createAction('CHANGE_PASSWORD'),
  forgotPassword: createAction('FORGOT_PASSWORD'),
  resetPassword: createAction('RESET_PASSWORD'),
  showProfile: createAction('SHOW_PROFILE'),
  resetAuthResponse: createAction('RESET_AUTH_RESPONSE'),
};
