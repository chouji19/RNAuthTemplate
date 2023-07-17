import { DefaultTheme } from '@react-navigation/native';

export enum Colors {
	primary = '#519491',
	primary800 = '#60d97e',
	background = '#FFFFFF',
	error = '#f13a59',
	black = '#000000',
	darkTone800 = '#1A1A25',
	dark900 = '#1B1F27',
	white = '#FFFFFF',
	fontMediumEmphasis = '#4A505C',
}

export const AppTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: Colors.primary,
		background: Colors.background,
	},
};

export const defaultFont = {
	fontFamily: 'SF Pro',
};
