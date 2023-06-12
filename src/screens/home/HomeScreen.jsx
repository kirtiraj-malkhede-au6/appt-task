import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import ExporeTab from '../../components/ExporeTab/ExporeTab';
import StoryList from '../../components/StoryList/StoryList';
import PostCard from '../../components/Cards/PostCard/PostCard';
import useAppContaner from '../../navigation/useAppContaner';
import useHomeScreen from './useHomeScreen';

export default function HomeScreen({navigation, route}) {
  const {insets} = useAppContaner();
  const {postList} = useHomeScreen();

  return (
    <>
      <View style={{height: insets.top, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      </View>
      <FlatList
        overScrollMode={'never'}
        decelerationRate={0.9}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <PostCard
              name={item?.name}
              username={item?.username}
              profileImage={item?.profileImage}
              postImage={item?.postImage}
              postType={item?.postType}
              videoUrl={item?.videoData?.path}
            />
          );
        }}
        ListHeaderComponent={
          <View>
            <ExporeTab />
            <StoryList />
          </View>
        }
      />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 90,
    backgroundColor: '#ffff',
  },
});
