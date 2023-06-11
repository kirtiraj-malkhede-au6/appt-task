/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppContainer from './src/navigation/AppContainer';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider style={{backgroundColor: 'pink'}}>
      <AppContainer />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: 'white'},
});

export default App;
