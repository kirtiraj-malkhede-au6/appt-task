import {View, Text} from 'react-native';
import React from 'react';

const Bar = props => {
  const {color = '#000', width, marginTop} = props;
  return (
    <View
      style={{
        height: width,
        width: '100%',
        marginTop: marginTop,
        borderRadius: width / 2,
        backgroundColor: color,
      }}
    />
  );
};

export default Bar;
