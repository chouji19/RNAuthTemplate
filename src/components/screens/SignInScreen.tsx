import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store';
import { startLoginWithEmailPassword } from '../../store/auth';
import { globalStyles } from '../../theme/GlobalStyles';
import { Colors } from '../../theme/Theme';
import { RootStackParamList } from '../navigator/Navigator';
import CustomButton from '../ui/CustomButton';

interface FormValues {
	email: string;
	password: string;
}

export const SignInScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const { top } = useSafeAreaInsets();
	const { status, errorMessage } = useSelector(
		(state: RootState) => state.auth,
	);

	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		if (status === 'authenticated') {
			navigation.navigate('HomeScreen');
		}
	}, [status, navigation]);

	useEffect(() => {
		if (errorMessage) {
			Toast.show({
				type: 'info',
				text1: errorMessage,
				position: 'bottom',
			});
		}
	}, [errorMessage]);

	const handleSignIn = ({ email, password }: FormValues) => {
		console.log('onSignIn');
		dispatch(
			startLoginWithEmailPassword({ email, password }) as AppDispatch,
		);
	};

	const validateForm = (values: FormValues) => {
		const errors: Partial<FormValues> = {};

		if (!values.email) {
			errors.email = 'Email is required';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address';
		}

		if (!values.password) {
			errors.password = 'Password is required';
		} else if (values.password.length < 6) {
			errors.password = 'Password must be at least 6 characters';
		}

		return errors;
	};

	return (
		<View style={[styles.container]}>
			<Text style={styles.title}>Sign in</Text>
			<Text style={styles.subTitle}>React Native App</Text>
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={validateForm}
				onSubmit={handleSignIn}>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					errors,
					touched,
				}) => (
					<View>
						<View style={globalStyles.inputView}>
							<Text style={globalStyles.inputText}>Email</Text>
							<TextInput
								style={[
									globalStyles.input,
									touched.email && errors.email
										? globalStyles.inputError
										: {},
								]}
								placeholder="Enter email"
								placeholderTextColor={Colors.fontMediumEmphasis}
								onChangeText={handleChange('email')}
								onBlur={handleBlur('email')}
								value={values.email}
								keyboardType="email-address"
								autoCapitalize="none"
							/>
							{errors.email && (
								<Text style={styles.errorText}>
									{errors.email}
								</Text>
							)}
						</View>
						<View style={globalStyles.inputView}>
							<Text style={globalStyles.inputText}>Password</Text>
							<TextInput
								style={[
									globalStyles.input,
									touched.password && errors.password
										? globalStyles.inputError
										: {},
								]}
								placeholder="Enter password"
								placeholderTextColor={Colors.fontMediumEmphasis}
								onChangeText={handleChange('password')}
								onBlur={handleBlur('password')}
								value={values.password}
								secureTextEntry={true}
								autoCapitalize="none"
							/>
							{touched.password && errors.password && (
								<Text style={styles.errorText}>
									{errors.password}
								</Text>
							)}
						</View>

						<TouchableOpacity
							style={styles.forgotPassword}
						// onPress={() => navigation.navigate('ForgotPassword')}
						>
							<Text style={styles.forgotPasswordText}>
								Forgot Password?
							</Text>
						</TouchableOpacity>

						<CustomButton
							title="Sign In"
							buttonStyle={styles.button}
							textStyle={styles.buttonText}
							onPress={handleSubmit}
						/>
					</View>
				)}
			</Formik>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
	},
	image: {
		width: 59,
		height: 48,
	},
	title: {
		fontSize: 40,
		color: Colors.black,
		marginTop: 50,
		marginBottom: 8,
	},
	subTitle: {
		fontSize: 26,
		color: Colors.black,
		marginBottom: 40,
	},
	forgotPassword: {
		alignSelf: 'flex-end',
		marginTop: 10,
	},
	forgotPasswordText: {
		fontSize: 16,
		color: Colors.primary,
	},
	button: {
		marginTop: 20,
		width: '100%',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.primary,
		borderRadius: 20,
	},
	buttonText: {
		fontSize: 16,
		color: Colors.white,
	},
	errorText: {
		fontSize: 12,
		color: Colors.error,
	},
});
