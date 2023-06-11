import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

export default function HomeScreen({navigation, route}) {
  console.log(route);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
