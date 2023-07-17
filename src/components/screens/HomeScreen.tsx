import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { startLogout } from '../../store/auth';

export const HomeScreen = () => {
	const dispatch: AppDispatch = useDispatch();

	const onButtonPress = () => {
		dispatch(startLogout());
	};

	return (
		<View
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<TouchableOpacity
				style={{
					marginTop: 20,
					width: '100%',
					height: 58,
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'red',
				}}
				onPress={onButtonPress}>
				<Text>Sign Out</Text>
			</TouchableOpacity>
		</View>
	);
};
