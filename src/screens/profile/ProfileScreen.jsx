import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import FlexView from '../../components/FlexView/FlexView';
import IconButton from '../../components/Bottons/IconButton/IconButton';
import BackIcon from '../../assets/icons/BackIcon';
import MessageIcon from '../../assets/icons/MessageIcon';
import useAppContaner from '../../navigation/useAppContaner';
import coverPhoto from '../../assets/profileAssets/profileCover.jpg';
import Typography from '../../components/Typography/Typography';
import Avatar from '../../components/Avatar/Avatar';
import CustomButton from '../../components/Bottons/CustomButton/CustomButton';
import MediaGallery from '../../components/MediaGallery/MediaGallery';

const profilePhoto =
  'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg';

export default function ProfileScreen({navigation}) {
  const {insets} = useAppContaner();
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <ImageBackground
        style={{height: 230, width: '100%'}}
        source={require('../../assets/profileAssets/profileCover.jpg')}>
        <FlexView
          direction={'row'}
          justifyContent={'space-between'}
          style={{
            paddingTop: insets.top,
            paddingHorizontal: 15,
          }}>
          <IconButton onPress={handleBack}>
            <BackIcon />
          </IconButton>
          <IconButton>
            <MessageIcon />
          </IconButton>
        </FlexView>
      </ImageBackground>
      <FlexView
        justifyContent={'flex-start'}
        alignItems={'center'}
        style={styles.profileContainer}>
        <FlexView
          width={'80%'}
          direction={'row'}
          justifyContent={'space-between'}
          style={{marginHorizontal: 20}}>
          <FlexView>
            <Typography fontWeight={'800'} size={16} color={'#000'}>
              10K
            </Typography>
            <Typography size={14} color={'#000'}>
              Followers
            </Typography>
          </FlexView>
          <Avatar
            style={{marginTop: -30}}
            size={90}
            borderWidth={4}
            borderColor={'#ffff'}
            imageUrl={profilePhoto}
          />
          <FlexView>
            <Typography fontWeight={'800'} size={16} color={'#000'}>
              135
            </Typography>
            <Typography size={14} color={'#000'}>
              Following
            </Typography>
          </FlexView>
        </FlexView>
        <Typography
          fontWeight={'800'}
          size={18}
          color={'#000'}
          style={{marginTop: 5}}>
          @tashmat13
        </Typography>
        <Typography
          numberOfLines={2}
          size={12}
          color={'#6C7A9C'}
          style={{marginTop: 10, width: 200, textAlign: 'center'}}>
          My name is Tashmar, I like photography and travelling all around the
          world
        </Typography>
        <FlexView paddingVertical={10} width={'100%'} direction={'row'}>
          <CustomButton
            color={'#5C95E3'}
            width={120}
            height={40}
            borderRadius={20}
            marginVertical={10}
            marginHorizontal={10}
            style={styles.customButton}>
            <Typography fontWeight={'500'} color={'#ffff'}>
              Follow
            </Typography>
          </CustomButton>
          <CustomButton
            color={'#ffff'}
            width={120}
            height={40}
            borderRadius={20}
            marginVertical={10}
            marginHorizontal={10}
            style={styles.customButton}>
            <Typography fontWeight={'500'} color={'#000'}>
              Message
            </Typography>
          </CustomButton>
        </FlexView>
        <MediaGallery />
      </FlexView>
    </>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: '#E6EEFA',
    marginTop: -45,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  customButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
});
