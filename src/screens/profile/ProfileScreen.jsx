import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function ProfileScreen({navigation}) {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text>ProfileScreen</Text>
      <Pressable
        style={{backgroundColor: 'pink', padding: 10}}
        onPress={handleBack}>
        <Text>Go Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
