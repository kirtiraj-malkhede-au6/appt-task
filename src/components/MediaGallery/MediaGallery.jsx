import {View, Text} from 'react-native';
import React, {useState} from 'react';
import FlexView from '../FlexView/FlexView';
import Typography from '../Typography/Typography';
import Bar from '../Bar/Bar';
import GalleryTabsButton from '../Bottons/GalleryTabsButton/GalleryTabsButton';

const MediaGallery = () => {
  const [selectedtab, setSelectedTab] = useState('all');

  const onSelectHandler = type => {
    setSelectedTab(type);
  };

  return (
    <View>
      <FlexView
        width={'60%'}
        direction={'row'}
        alignItems={'flex-start'}
        justifyContent={'space-evenly'}>
        <GalleryTabsButton
          name={'All'}
          selected={selectedtab === 'all' ? true : false}
          onPress={() => onSelectHandler('all')}
        />
        <GalleryTabsButton
          name={'Photos'}
          selected={selectedtab === 'photos' ? true : false}
          onPress={() => onSelectHandler('photos')}
        />
        <GalleryTabsButton
          name={'Videos'}
          selected={selectedtab === 'videos' ? true : false}
          onPress={() => onSelectHandler('videos')}
        />
      </FlexView>
    </View>
  );
};

export default MediaGallery;
