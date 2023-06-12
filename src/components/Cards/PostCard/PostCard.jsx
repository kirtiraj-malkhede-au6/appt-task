import {View, Image, Text, StyleSheet} from 'react-native';
import React, {memo} from 'react';
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
import VideoView from '../../VideoView/VideoView';

const PostCard = ({
  name,
  username,
  profileImage,
  postImage,
  postType,
  videoUrl,
}) => {
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
          imageUrl={profileImage}
        />
        <FlexView
          style={{marginLeft: 10}}
          alignItems={'flex-start'}
          justifyContent={'center'}>
          <Typography size={16} fontWeight={'500'}>
            {name}
          </Typography>
          <Typography size={13} style={{marginTop: -5}}>
            {username}
          </Typography>
        </FlexView>
      </FlexView>
      <View style={{width: '100%'}}>
        {postType === 'video' ? (
          <VideoView
            width={'100%'}
            height={270}
            borderRadius={30}
            style={{marginTop: 10}}
            videoUrl={videoUrl}
          />
        ) : (
          <ImageView
            width={'100%'}
            height={270}
            borderRadius={30}
            style={{marginTop: 10}}
            imageUrl={postImage}
          />
        )}

        <PostAction />
      </View>
    </FlexView>
  );
};

export default memo(PostCard);
