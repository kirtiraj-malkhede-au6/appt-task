import {Text} from 'react-native';
import React from 'react';

const Typography = props => {
  const {
    size,
    color,
    fontWeight = '400',
    style,
    numberOfLines = undefined,
    children,
    ...componentProps
  } = props;

  return (
    <Text
      style={{fontSize: size, color: color, fontWeight, ...style}}
      numberOfLines={numberOfLines}
      {...componentProps}>
      {children}
    </Text>
  );
};

export default Typography;
