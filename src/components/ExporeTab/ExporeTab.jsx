import {View, Text} from 'react-native';
import React from 'react';
import FlexView from '../FlexView/FlexView';
import IconButton from '../Bottons/IconButton/IconButton';
import HomeIcon from '../../assets/icons/HomeIcon';
import Typography from '../Typography/Typography';
import CameraIcon from '../../assets/icons/CameraIcon';
import BellIcon from '../../assets/icons/BellIcon';

const ExporeTab = () => {
  return (
    <FlexView
      direction={'row'}
      justifyContent={'space-between'}
      paddingVertical={5}
      paddingHorizontal={5}>
      <IconButton activeOpacity={0.7}>
        <CameraIcon />
      </IconButton>
      <Typography size={20} color={'#000'} fontWeight={'600'}>
        Explore
      </Typography>
      <IconButton activeOpacity={0.7}>
        <BellIcon />
      </IconButton>
    </FlexView>
  );
};

export default ExporeTab;
