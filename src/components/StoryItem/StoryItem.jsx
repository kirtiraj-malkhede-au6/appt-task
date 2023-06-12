import {View, Image} from 'react-native';
import React from 'react';
import AddIcon from '../../assets/icons/AddIcon';
import Typography from '../Typography/Typography';
import FlexView from '../FlexView/FlexView';
import Avatar from '../Avatar/Avatar';

const StoryItem = ({imageUrl, index, myStory, name}) => {
  return (
    <FlexView>
      <Avatar
        imageUrl={imageUrl}
        myAvatar={myStory}
        size={65}
        borderWidth={2}
        padding={2}
        borderColor={'#5790DF'}
        style={{marginRight: 10}}
      />
      <Typography fontWeight={'500'} color={'#000'} style={{marginVertical: 2}}>
        {name}
      </Typography>
    </FlexView>
  );
};

export default StoryItem;
