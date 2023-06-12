import {View, Text} from 'react-native';
import React from 'react';

const FlexView = props => {
  const {
    direction = 'column',
    width,
    height,
    borderRadius = 0,
    paddingVertical = 0,
    paddingHorizontal = 0,
    justifyContent = 'center',
    alignItems = 'center',
    children,
    style,
  } = props;
  return (
    <View
      style={{
        borderRadius,
        width,
        height,
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
        paddingVertical,
        paddingHorizontal,
        ...style,
      }}>
      {children}
    </View>
  );
};

export default FlexView;
