import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useAppContaner from '../../navigation/useAppContaner';

export default function MoreScreen() {
  const {insets} = useAppContaner();
  return (
    <View>
      <View style={{height: insets.top, backgroundColor: '#fff'}}>
        <StatusBar barStyle="dark-content" />
      </View>
      <Text>MoreScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
