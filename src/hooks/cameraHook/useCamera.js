import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Linking} from 'react-native';
import {Camera} from 'react-native-vision-camera';

export default function useCamera() {
  const navigation = useNavigation();
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState(undefined);

  const [microphonePermissionStatus, setMicrophonePermissionStatus] =
    useState(undefined);

  const [permissionStatus, setPermissionStatus] = useState({
    camera: false,
    microphone: false,
  });

  const requestMicrophonePermission = useCallback(async () => {
    console.log('Requesting microphone permission...');
    const permission = await Camera.requestMicrophonePermission();
    console.log(`Microphone permission status: ${permission}`);

    if (permission === 'denied') await Linking.openSettings();
    setMicrophonePermissionStatus(permission);
  }, []);

  const requestCameraPermission = useCallback(async () => {
    console.log('Requesting camera permission...');
    const permission = await Camera.requestCameraPermission();
    console.log(`Camera permission status: ${permission}`);

    if (permission === 'denied') await Linking.openSettings();
    setCameraPermissionStatus(permission);
  }, []);

  useEffect(() => {
    if (
      cameraPermissionStatus === 'authorized' &&
      microphonePermissionStatus === 'authorized'
    ) {
      console.log('Navigate to camera view page');
    }
  }, [cameraPermissionStatus, microphonePermissionStatus]);

  useEffect(() => {
    getPermissionStatus();
  }, []);

  const getPermissionStatus = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    const microphonePermission = await Camera.getMicrophonePermissionStatus();

    if (cameraPermission === 'authorized') {
      setPermissionStatus(prev => {
        return {
          ...prev,
          camera: true,
        };
      });
    }
    if (microphonePermission === 'authorized') {
      setPermissionStatus(prev => {
        return {
          ...prev,
          microphone: true,
        };
      });
    }
  };

  const addPostHandler = async () => {
    if (!permissionStatus.camera) await requestCameraPermission();
    if (!permissionStatus.microphone) await requestMicrophonePermission();

    const cameraPermission = await Camera.getCameraPermissionStatus();
    const microphonePermission = await Camera.getMicrophonePermissionStatus();

    if (cameraPermission !== 'authorized') {
      Alert.alert('Alert Title', 'Allow Camera Permission');
    }
    if (microphonePermission !== 'authorized') {
      Alert.alert('Alert Title', 'Allow Micorphone Permission');
    }

    if (
      microphonePermission === 'authorized' &&
      cameraPermission === 'authorized'
    ) {
      navigation.replace('CameraPage');
    }
  };

  return {addPostHandler};
}
