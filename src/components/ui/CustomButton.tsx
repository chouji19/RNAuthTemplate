import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/MaterialIcons';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  buttonStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconName?: string;
  iconFont?: 'MaterialIcons' | 'MaterialCommunityIcons';
  iconStyle?: StyleProp<TextStyle>;
  iconPosition?: 'left' | 'right';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  buttonStyle,
  textStyle,
  iconName,
  iconStyle,
  iconPosition,
  iconFont = 'MaterialIcons',
  ...props
}) => {
  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      {iconName &&
        iconPosition === 'left' &&
        (iconFont === 'MaterialIcons' ? (
          <IconM name={iconName} style={iconStyle} />
        ) : (
          <IconMC name={iconName} style={iconStyle} />
        ))}
      <Text style={textStyle}>{title}</Text>
      {iconName &&
        iconPosition === 'right' &&
        (iconFont === 'MaterialIcons' ? (
          <IconM name={iconName} style={iconStyle} />
        ) : (
          <IconMC name={iconName} style={iconStyle} />
        ))}
    </TouchableOpacity>
  );
};

export default CustomButton;
