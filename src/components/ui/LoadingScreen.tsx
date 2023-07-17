import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Colors } from '../../theme/Theme';

const LoadingScreen = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color={Colors.primary} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default LoadingScreen;
