import React, { useEffect } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { checkingAuthentication } from '../../store/auth';
import { HomeScreen } from '../screens/HomeScreen';
import { SignInScreen } from '../screens/SignInScreen';
import { SignUpScreen } from '../screens/SignUpScreen';

export type RootStackParamList = {
	UnauthenticatedNavigation: undefined;
	SignInScreen: undefined;
	SignUpScreen: undefined;
	HomeScreen: undefined;
};

const Stack = createNativeStackNavigator();

const UnauthenticatedNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="SignInScreen"
				component={SignInScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="SignUpScreen"
				component={SignUpScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export const Navigator = () => {
	const { status } = useSelector((state: RootState) => state.auth);
	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		dispatch(checkingAuthentication());
	}, []);

	return (
		<Stack.Navigator>
			{status === 'authenticated' ? (
				<Stack.Screen
					name="HomeScreen"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
			) : (
				<Stack.Screen
					name="UnauthenticatedNavigation"
					component={UnauthenticatedNavigation}
					options={{ headerShown: false }}
				/>
			)}
		</Stack.Navigator>
	);
};
