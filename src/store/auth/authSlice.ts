import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface AuthState {
  status: 'checking' | 'not-authenticated' | 'authenticated';
  id: string | null;
  email: string | null;
  errorMessage: string | null;
  fullName: string | null;
  insuranceId: string | null;
  token: string | null;
}

export interface AuthPayload {
  status?: 'checking' | 'not-authenticated' | 'authenticated';
  id?: string | null;
  email?: string | null;
  fullName?: string | null;
  errorMessage?: string | null;
  insuranceId?: string | null;
  token?: string | null;
}

const initialState: AuthState = {
  status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
  id: null,
  email: null,
  errorMessage: null,
  fullName: null,
  token: null,
  insuranceId: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, {payload}: PayloadAction<AuthPayload>) => {
      (state.status = 'authenticated'), // 'checking', 'not-authenticated', 'authenticated'
        (state.id = payload.id || null);
      state.email = payload.email || null;
      state.fullName = payload.fullName || null;
      state.errorMessage = null;
      state.token = payload.token || null;
      state.insuranceId = payload.insuranceId || null;
    },
    logout: (state, {payload}) => {
      (state.status = 'not-authenticated'), // 'checking', 'not-authenticated', 'authenticated'
        (state.id = null);
      state.email = null;
      state.fullName = null;
      state.token = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredentials: state => {
      state.status = 'checking';
    },
    updateUserInsuranceId: (state, {payload}) => {
      state.insuranceId = payload.insuranceId;
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout, checkingCredentials, updateUserInsuranceId} =
  authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
