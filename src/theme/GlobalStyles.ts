import { StyleSheet } from 'react-native';
import { Colors, defaultFont } from './Theme';

export const globalStyles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
	},
	defaultFont: {
		fontFamily: defaultFont.fontFamily,
	},
	font18Regular: {
		fontSize: 18,
		fontFamily: defaultFont.fontFamily,
	},
	inputView: {
		width: '100%',
		marginBottom: 24,
	},
	inputText: {
		color: Colors.black,
		fontSize: 16,
		marginBottom: 8,
	},
	input: {
		height: 54,
		backgroundColor: Colors.white,
		color: Colors.black,
		paddingHorizontal: 16,
		fontSize: 18,
		borderWidth: 1,
		borderRadius: 12,
	},
	inputError: {
		borderColor: Colors.error,
		borderWidth: 1,
	},
	button: {
		height: 54,
		paddingHorizontal: 16,
		backgroundColor: Colors.primary,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
	buttonText: {
		color: Colors.white,
		fontSize: 16,
		fontFamily: defaultFont.fontFamily,
	},
	modalButton: {
		height: 54,
		paddingHorizontal: 16,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		backgroundColor: Colors.white,
		borderColor: Colors.darkTone800,
		borderWidth: 1,
		width: '100%',
	},
	modalButtonText: {
		fontSize: 16,
		fontFamily: defaultFont.fontFamily,
		color: Colors.darkTone800,
	},
	modalButtonDark: {
		height: 54,
		paddingHorizontal: 16,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		borderColor: Colors.darkTone800,
		borderWidth: 1,
		backgroundColor: Colors.black,
		width: '100%',
	},
	modalButtonDarkText: {
		fontSize: 16,
		fontFamily: defaultFont.fontFamily,
		color: Colors.white,
	},
	skeletonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 200,
		justifyContent: 'center',
	},
	skeletonImage: {
		width: '100%',
		paddingHorizontal: 16,
		height: 200,
	},
	skeletonSmallView: {
		padding: 16,
		width: '100%',
		height: 20,
		marginTop: 20,
	},
});
