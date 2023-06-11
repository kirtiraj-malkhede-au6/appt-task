import {Image} from 'react-native';
import React from 'react';
import FlexView from '../FlexView/FlexView';

const ImageView = props => {
  const {imageUrl, borderRadius, width, height, style, ...imageProps} = props;

  return (
    <FlexView width={width} style={style} borderRadius={borderRadius}>
      <Image
        style={{
          height: height,
          width: '100%',
          borderRadius: 30,
          backgroundColor: 'whitesmoke',
        }}
        resizeMode={'cover'}
        source={{uri: imageUrl}}
        {...imageProps}
      />
    </FlexView>
  );
};

export default ImageView;
