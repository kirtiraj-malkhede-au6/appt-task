import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useAppContaner from '../../navigation/useAppContaner';

export default function NotificationScreen() {
  const {insets} = useAppContaner();
  return (
    <View>
      <View style={{height: insets.top, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      </View>
      <Text>NotificationScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
