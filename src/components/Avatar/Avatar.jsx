import {View, Image, Text} from 'react-native';
import React from 'react';
import AddIcon from '../../assets/icons/AddIcon';

const Avatar = props => {
  const {
    imageUrl,
    borderColor,
    borderWidth,
    padding,
    size = 50,
    myAvatar = false,
    style,
  } = props;

  return (
    <View
      style={{
        borderRadius: size,
        borderColor: borderColor,
        borderWidth: borderWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        ...style,
      }}>
      <Image
        style={{
          margin: padding,
          height: size,
          width: size,
          borderRadius: size,
          backgroundColor: 'whitesmoke',
        }}
        resizeMode="center"
        source={{
          uri: imageUrl,
        }}
      />
      {myAvatar && (
        <View style={{position: 'absolute', backgroundColor: 'transparent'}}>
          <AddIcon color={'#fff'} />
        </View>
      )}
    </View>
  );
};

export default Avatar;
