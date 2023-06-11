import React, {useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import changeNavigationBarColor, {
  hideNavigationBar,
} from 'react-native-navigation-bar-color';
// Importing Icons
import HomeIcon from '../assets/icons/HomeIcon.jsx';
import MoreIcon from '../assets/icons/MoreIcon.jsx';
import ProfileIcon from '../assets/icons/ProfileIcon.jsx';
import NotificationIcon from '../assets/icons/NotificationIcon.jsx';
import AddIcon from '../assets/icons/AddIcon.jsx';
import {Camera} from 'react-native-vision-camera';

export default function useAppContaner() {
  const insets = useSafeAreaInsets();

  const navigationBarColorHAndler = async () => {
    try {
      const response = await changeNavigationBarColor('transparent', true);
      //   console.log(response); // {success: true}
    } catch (e) {
      //   console.log(e); // {success: false}
    }
  };
  const _renderIcon = (routeName, selectedTab) => {
    switch (routeName) {
      case 'Tab1':
        return <HomeIcon color={'white'} />;

      case 'Tab2':
        return <MoreIcon color={'white'} />;

      case 'Tab3':
        return <ProfileIcon color={'white'} />;

      case 'Tab4':
        return <NotificationIcon color={'white'} />;
    }
    // return <Ionicons color={routeName === selectedTab ? 'black' : 'gray'} />;
  };

  const getCameraPermission = async () => {
    const cameraPermission = await Camera.requestCameraPermission();
    return cameraPermission;
  };
  const getMicrophonePermission = async () => {
    const microphonePermission = await Camera.requestMicrophonePermission();
    return microphonePermission;
  };

  const addPostHandler = async () => {
    const result = await getCameraPermission();
    console.log(result);
  };

  return {
    insets,
    navigationBarColorHAndler,
    _renderIcon,
    addPostHandler,
  };
}
