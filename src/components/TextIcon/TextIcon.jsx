import {View, Text} from 'react-native';
import React from 'react';
import FlexView from '../FlexView/FlexView';
import Typography from '../Typography/Typography';

const TextIcon = props => {
  const {
    direction = 'row',
    text,
    textSize,
    textColor,
    textWeight = '400',
    textStyle,
    style,
    children,
  } = props;

  return (
    <FlexView direction={direction} style={style}>
      {children}
      <Typography
        color={textColor}
        size={textSize}
        fontWeight={textWeight}
        style={{...textStyle}}>
        {text}
      </Typography>
    </FlexView>
  );
};

export default TextIcon;
