import {FlatList, Text} from 'react-native';
import React from 'react';
import StoryItem from '../StoryItem/StoryItem';
import useStoryList from './useStoryList';

const StoryList = () => {
  const {storyList, myPhoto} = useStoryList();
  return (
    <FlatList
      overScrollMode={'never'}
      decelerationRate={0.9}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingLeft: 10,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      data={storyList}
      keyExtractor={(item, index) => index}
      renderItem={({item, index}) => (
        <StoryItem index={index} imageUrl={item.imageUrl} name={item.name} />
      )}
      ListHeaderComponent={
        <StoryItem imageUrl={myPhoto} myStory={true} name={'You'} />
      }
    />
  );
};

export default StoryList;
