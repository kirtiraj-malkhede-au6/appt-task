import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import FlexView from '../../FlexView/FlexView';
import Avatar from '../../Avatar/Avatar';
import Typography from '../../Typography/Typography';
import ImageView from '../../ImageView/ImageView';
import TextIcon from '../../TextIcon/TextIcon';
import CommentIcon from '../../../assets/icons/CommentIcon';
import LikeIcon from '../../../assets/icons/LickIcon';
import ShareIcon from '../../../assets/icons/ShareIcon';
import IconButton from '../../Bottons/IconButton/IconButton';
import BookmarkIcon from '../../../assets/icons/BookmarkIcon';
import PostAction from './PostAction';

const postImage =
  'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc';
const PostCard = () => {
  return (
    <FlexView
      justifyContent={'flex-start'}
      alignItems={'flex-start'}
      paddingVertical={10}
      paddingHorizontal={10}
      borderRadius={30}
      style={{backgroundColor: '#e7eefb', marginVertical: 10}}>
      <FlexView direction={'row'} style={{marginLeft: 10}}>
        <Avatar
          size={42}
          borderWidth={1}
          padding={1}
          borderColor={'white'}
          imageUrl={postImage}
        />
        <FlexView
          style={{marginLeft: 10}}
          alignItems={'flex-start'}
          justifyContent={'center'}>
          <Typography size={16} fontWeight={'500'}>
            Balanchaev
          </Typography>
          <Typography size={13} style={{marginTop: -5}}>
            @balanchaev20
          </Typography>
        </FlexView>
      </FlexView>
      <View style={{width: '100%'}}>
        <ImageView
          width={'100%'}
          height={270}
          borderRadius={30}
          style={{marginTop: 10}}
        />
        <PostAction />
      </View>
    </FlexView>
  );
};

export default PostCard;
