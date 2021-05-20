import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    userData: null,
    companyData: null
  },
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
    },
    logout: state => {
      state.userData = null;
      state.companyData = null;
    },
    setCompanyData: (state, action) => {
      state.companyData = action.payload;
    },
  },
});

export const { login, logout, setCompanyData } = appSlice.actions;

export const selectUserData = state => state.app.userData;
export const selectCompanyData = state => state.app.companyData;

export default appSlice.reducer;