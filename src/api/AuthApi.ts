import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	SignInResponse,
	ValidateTokenResponse,
} from '../interfaces/auth/auth.interfaces';
import backApi, { tokenAuth } from './backAPI';

interface LoginWithEmailPasswordProps {
	email: string;
	password: string;
}

export interface LoginResult {
	ok: boolean;
	user?: UserAuth;
	token?: string;
	errorMessage?: string;
	statusCode?: number;
	message?: string;
	error?: string;
}

export interface UserAuth {
	id?: string;
	email?: string;
	status?: string;
	fullName?: string;
	insuranceId?: string;
}
export const loginWithEmailPassword = async ({
	email,
	password,
}: LoginWithEmailPasswordProps): Promise<LoginResult> => {
	try {
		const { data } = await backApi.post<SignInResponse>('/auth/login', {
			email,
			password,
		});
		const { token } = data;
		await AsyncStorage.setItem('token', token);

		return {
			ok: true,
			user: {
				id: data.user.id,
				email: data.user.email,
				fullName: data.user.fullName,
				insuranceId: data.user.insurance?.id,
			},
			token: data.token,
		};
	} catch (error: any) {
		console.log(error);
		if (error.response) {
			return { ok: false, errorMessage: error.response.data.message };
		}
		return { ok: false, errorMessage: 'Invalid username or password' };
	}
};

export const validateToken = async (): Promise<LoginResult> => {
	try {
		const token = await AsyncStorage.getItem('token');
		if (!token) {
			return {
				ok: false,
				errorMessage: '',
			};
		}
		tokenAuth(token);
		const { data } = await backApi.get<ValidateTokenResponse>(
			'/auth/validateToken',
		);
		const { token: newToken } = data;
		if (!newToken) {
			await AsyncStorage.removeItem('token');
			return {
				ok: false,
				errorMessage: '',
			};
		}
		await AsyncStorage.setItem('token', newToken);
		return {
			ok: true,
			user: {
				id: data.user.id,
				email: data.user.email,
				fullName: data.user.fullName,
				insuranceId: data.user.insurance?.id,
			},
			token: data.token,
		};
	} catch (error) {
		console.log(error);
	}
	await AsyncStorage.removeItem('token');
	return {
		ok: false,
		errorMessage: 'Your session has expired',
	};
};
