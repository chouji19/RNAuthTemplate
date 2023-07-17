import {createAsyncThunk} from '@reduxjs/toolkit';
import {checkingCredentials, login, logout} from './authSlice';
import {RootState} from '../store';
import {
  LoginResult,
  loginWithEmailPassword,
  validateToken,
} from '../../api/AuthApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginCredentials {
  email: string;
  password: string;
}

export const checkingAuthentication = createAsyncThunk<
  LoginResult,
  void,
  {state: RootState}
>('auth/checkingAuthentication', async (_, {dispatch}) => {
  dispatch(checkingCredentials());
  try {
    const result = await validateToken();

    if (!result.ok) {
      dispatch(
        logout({
          errorMessage: result.errorMessage,
        }),
      );
      throw new Error('Login failed');
    }
    dispatch(
      login({
        id: result.user ? result.user.id : '',
        email: result.user ? result.user.email : '',
        fullName: result.user ? result.user.fullName : '',
        insuranceId: result.user ? result.user.insuranceId : '',
        token: result.token,
        status: 'authenticated',
      }),
    );

    return result;
  } catch (error) {
    // Handle error
    throw error;
  }
});

export const startLoginWithEmailPassword = createAsyncThunk<
  LoginResult,
  LoginCredentials,
  {state: RootState}
>('auth/startLoginWithEmailPassword', async ({email, password}, {dispatch}) => {
  dispatch(checkingCredentials());

  try {
    const result = await loginWithEmailPassword({email, password});
    console.log({result});
    if (!result.ok) {
      dispatch(
        logout({
          errorMessage: result.errorMessage,
        }),
      );
      await AsyncStorage.removeItem('token');
      throw new Error('Login failed');
    }
    dispatch(
      login({
        id: result.user ? result.user.id : '',
        email: result.user ? result.user.email : '',
        fullName: result.user ? result.user.fullName : '',
        token: result.token,
        insuranceId: result.user ? result.user.insuranceId : '',
        status: 'authenticated',
      }),
    );

    return result;
  } catch (error) {
    console.log(error);
  }
  return {
    ok: false,
    errorMessage: 'Invalid email or password',
  };
});

export const startLogout = createAsyncThunk<void, void, {state: RootState}>(
  'auth/startLogout',
  async (_, {dispatch}) => {
    dispatch(logout({}));
    await AsyncStorage.removeItem('token');
  },
);
