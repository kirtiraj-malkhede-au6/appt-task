import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FlexView from '../../FlexView/FlexView';
import Typography from '../../Typography/Typography';
import Bar from '../../Bar/Bar';

const GalleryTabsButton = props => {
  const {onPress, activeOpacity = 0.8, name, selected, componentProps} = props;

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      {...componentProps}>
      <FlexView>
        <Typography size={14} color={'#000'} fontWeight={'500'}>
          {name}
        </Typography>
        {selected && <Bar marginTop={2} width={4} color={'#6C7A9C'} />}
      </FlexView>
    </TouchableOpacity>
  );
};

export default GalleryTabsButton;
