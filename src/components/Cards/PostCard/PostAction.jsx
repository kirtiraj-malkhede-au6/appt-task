import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FlexView from '../../FlexView/FlexView';
import IconButton from '../../Bottons/IconButton/IconButton';
import TextIcon from '../../TextIcon/TextIcon';
import CommentIcon from '../../../assets/icons/CommentIcon';
import ShareIcon from '../../../assets/icons/ShareIcon';
import BookmarkIcon from '../../../assets/icons/BookmarkIcon';
import LikeIcon from '../../../assets/icons/LickIcon';

const PostAction = ({onLike, onComment, onShare, onBookmark}) => {
  return (
    <View style={styles.actionContainer}>
      <FlexView direction={'row'}>
        <IconButton>
          <TextIcon
            textSize={14}
            text={'12'}
            direction={'row'}
            textColor={'#DADADA'}
            textWeight={'600'}
            textStyle={{marginLeft: 2, marginTop: -2}}>
            <CommentIcon />
          </TextIcon>
        </IconButton>
        <IconButton>
          <TextIcon
            textSize={14}
            text={'12k'}
            direction={'row'}
            textColor={'#DADADA'}
            textWeight={'600'}
            textStyle={{marginLeft: 2, marginTop: -2}}
            style={{marginLeft: 15}}>
            <LikeIcon />
          </TextIcon>
        </IconButton>
      </FlexView>
      <FlexView direction={'row'}>
        <IconButton style={{marginRight: 15}}>
          <ShareIcon />
        </IconButton>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
      </FlexView>
    </View>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomEndRadius: 30,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});

export default PostAction;
