import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import Modal from 'react-native-modal';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from '../../theme/GlobalStyles';
import { Colors, defaultFont } from '../../theme/Theme';
import CustomButton from './CustomButton';

interface Props {
	isModalVisible: boolean;
	setIsModalVisible: (value: boolean) => void;
	onConfirm: () => void;
	confirmText?: string;
	showCancelButton?: boolean;
	onCancel?: () => void;
	cancelText?: string;
	title: string;
	description: string;
	confirmationButtonStyle?: StyleProp<TextStyle>;
	confirmationButtonTextStyle?: StyleProp<TextStyle>;
	cancelButtonStyle?: StyleProp<TextStyle>;
	cancelButtonTextStyle?: StyleProp<TextStyle>;
}

export const CustomModal: React.FC<Props> = ({
	isModalVisible = false,
	setIsModalVisible,
	onConfirm,
	onCancel,
	title,
	description,
	confirmText = 'Confirm',
	cancelText = 'Cancel',
	showCancelButton = false,
	confirmationButtonStyle = globalStyles.modalButton,
	confirmationButtonTextStyle = globalStyles.modalButtonText,
	cancelButtonStyle = globalStyles.modalButtonDark,
	cancelButtonTextStyle = globalStyles.modalButtonDarkText,
}) => {
	const toggleModal = () => {
		setIsModalVisible(!isModalVisible);
		onConfirm();
	};

	const onCancelPress = () => {
		setIsModalVisible(!isModalVisible);
		if (onCancel) {
			onCancel();
		}
	};

	const onCloseButton = () => {
		setIsModalVisible(false);
	};

	return (
		<Modal isVisible={isModalVisible}>
			<View style={styles.container}>
				<View style={styles.closeContainer}>
					<IconM
						name="close"
						size={24}
						color={Colors.darkTone800}
						onPress={onCloseButton}
					/>
				</View>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.body}>{description}</Text>
				<CustomButton
					title={confirmText}
					onPress={toggleModal}
					buttonStyle={confirmationButtonStyle}
					textStyle={confirmationButtonTextStyle}
				/>
				{showCancelButton && (
					<CustomButton
						title={cancelText}
						onPress={onCancelPress}
						buttonStyle={cancelButtonStyle}
						textStyle={cancelButtonTextStyle}
					/>
				)}
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		paddingHorizontal: 42,
		paddingBottom: 22,
		paddingTop: 32,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 12,
		fontFamily: defaultFont.fontFamily,
		color: Colors.darkTone800,
	},
	body: {
		fontSize: 16,
		fontFamily: defaultFont.fontFamily,
		color: Colors.darkTone800,
		textAlign: 'center',
		marginBottom: 32,
	},
	closeContainer: {
		position: 'absolute',
		top: 16,
		right: 16,
	},
});
export default CustomModal;
