import {TouchableOpacity} from 'react-native';
import React from 'react';

const IconButton = props => {
  const {activeOpacity = 0.7, style, children, ...componentProps} = props;

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      {...componentProps}
      style={style}>
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;
