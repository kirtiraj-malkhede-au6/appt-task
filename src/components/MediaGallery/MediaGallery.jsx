import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
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
    <View style={{width: '100%', alignItems: 'center'}}>
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
      <ScrollView contentContainerStyle={styles.gridContainer}>
        <Image
          style={styles.image1}
          source={require('../../assets/profileAssets/gallery1.jpg')}
        />
        <View style={styles.gridChild}>
          <Image
            style={styles.image2}
            source={require('../../assets/profileAssets/gallery2.jpg')}
          />
          <Image
            style={styles.image3}
            source={require('../../assets/profileAssets/gallery3.jpg')}
          />
        </View>

        <Image
          style={styles.image4}
          source={require('../../assets/profileAssets/gallery3.jpg')}
        />
        <Image
          style={styles.image5}
          source={require('../../assets/profileAssets/gallery4.jpg')}
        />
        <Image
          style={styles.image6}
          source={require('../../assets/profileAssets/gallery5.jpg')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    padding: 8,
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: '#ffff',
    borderRadius: 38,
  },
  image1: {
    width: '46%',
    height: 200,
    borderTopLeftRadius: 30,
  },
  gridChild: {
    marginLeft: '2%',
    width: '46%',
    height: 200,
    justifyContent: 'space-between',
  },
  image2: {width: '100%', height: '48%', borderTopRightRadius: 30},
  image3: {width: '100%', height: '48%'},
  image4: {
    marginTop: '2%',
    width: '30%',
    height: 160,
    borderBottomLeftRadius: 30,
  },
  image5: {
    marginTop: '2%',
    marginHorizontal: '2%',
    width: '30%',
    height: 160,
  },
  image6: {
    marginTop: '2%',
    width: '30%',
    height: 160,
    borderBottomRightRadius: 30,
  },
});

export default MediaGallery;
