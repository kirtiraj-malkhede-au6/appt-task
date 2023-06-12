import {View, Text} from 'react-native';
import React from 'react';
import FlexView from '../FlexView/FlexView';
import VideoPlayer from 'react-native-video-player';

const VideoView = props => {
  const {videoUrl, borderRadius, width, height, style} = props;

  return (
    <FlexView
      width={width}
      height={height}
      style={style}
      borderRadius={borderRadius}>
      <VideoPlayer
        videoWidth={1600}
        videoHeight={900}
        showDuration={false}
        hideControlsOnStart={true}
        resizeMode={'cover'}
        customStyles={{height: '100%', width: '100%'}}
        video={{
          uri: videoUrl,
        }}
        thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
      />
    </FlexView>
  );
};

export default VideoView;
