import {StyleSheet, Text, View, Dimensions, Alert} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Typography from '../../components/Typography/Typography';
import CustomButton from '../../components/Bottons/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {storage} from '../../storage/storage';
import CameraIcon from '../../assets/icons/CameraIcon';
import IconButton from '../../components/Bottons/IconButton/IconButton';

const randomId = () => Math.floor(Math.random() * 9000000000) + 1000000000;
const newPost = {
  id: null,
  name: 'tashmat',
  username: '@tashmat13',
  postType: 'video',
  profileImage:
    'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
};

const windowWidth = Dimensions.get('window').width;
const CameraPage = () => {
  const camera = useRef(null);
  const navigation = useNavigation();
  const devices = useCameraDevices('wide-angle-camera');
  const [recording, setRecording] = useState(false);
  const [counter, setCounter] = useState(0);
  const [cameraPosition, setCameraPosition] = useState(false);
  const device = devices[cameraPosition ? 'front' : 'back'];

  const handleCameraCancel = () => {
    navigation.replace('Tabs');
  };

  const startRecording = async () => {
    setRecording(true);
    camera.current.startRecording({
      flash: 'off',
      onRecordingFinished: video => {
        const postData = {
          ...newPost,
          id: randomId(),
          videoData: {
            ...video,
          },
        };
        storage.set('userPost', JSON.stringify(postData));
        Alert.alert('Success', 'Video recorded successfully');
        handleCameraCancel();
      },
      onRecordingError: error => {
        Alert.alert('Error', 'something went wrong !');
        console.error(error);
      },
    });
  };

  const stopRecording = async () => {
    await camera.current.stopRecording();
    setRecording(false);
  };

  // 5 sec Timer
  useEffect(() => {
    if (recording && counter === 5) {
      stopRecording();
    }
    let timer =
      recording && counter < 5
        ? setInterval(() => setCounter(counter + 1), 1000)
        : null;
    return () => clearInterval(timer);
  }, [counter, recording]);

  if (device == null) return <Text>Loading...</Text>;
  return (
    <View style={{flex: 1}}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        video={true}
        audio={true}
        isActive={true}
        CameraPosition={'front'}
      />
      <View
        style={[
          styles.cameraButton,
          {borderColor: recording ? '#D10000' : '#E9EAE0'},
        ]}>
        <CustomButton
          activeOpacity={0.8}
          style={styles.cameraButtonInner}
          onPress={counter > 1 ? stopRecording : startRecording}>
          {
            <Typography color={'#ffff'} size={30}>
              {counter >= 0 ? counter : null}
            </Typography>
          }
        </CustomButton>
      </View>
      <CustomButton
        onPress={handleCameraCancel}
        borderRadius={20}
        style={styles.cancelButton}
        activeOpacity={0.5}>
        <Typography size={16} color={'#E9EAE0'} fontWeight={'400'}>
          Cancel
        </Typography>
      </CustomButton>
      <IconButton
        style={styles.switchCamera}
        onPress={() => setCameraPosition(!cameraPosition)}>
        <CameraIcon />
      </IconButton>
    </View>
  );
};

export default CameraPage;

const styles = StyleSheet.create({
  cameraButton: {
    position: 'absolute',
    left: windowWidth / 2 - 35,
    bottom: 50,
    height: 70,
    width: 70,
    borderRadius: 70,
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraButtonInner: {
    height: 56,
    width: 56,
    borderRadius: 56,
    backgroundColor: 'rgba(180,180,180,0.5)',
  },
  cancelButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  switchCamera: {
    position: 'absolute',
    bottom: 70,
    left: 30,
  },
});
