import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
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
        <StatusBar barStyle="dark-content" />
      </View>
      <FlatList
        overScrollMode={'never'}
        decelerationRate={0.9}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <PostCard
            name={item.name}
            username={item.username}
            profileImage={item.profileImage}
            postImage={item.postImage}
          />
        )}
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
