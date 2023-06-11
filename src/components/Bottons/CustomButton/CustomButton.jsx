import {TouchableOpacity, Text} from 'react-native';
import React from 'react';

const CustomButton = props => {
  const {
    color,
    height,
    width,
    borderRadius,
    marginHorizontal,
    marginVertical,
    activeOpacity = 0.8,
    style,
    children,
    ...componentProps
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={{
        marginHorizontal,
        marginVertical,
        height,
        width,
        borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color,
        ...style,
      }}
      {...componentProps}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomButton;
