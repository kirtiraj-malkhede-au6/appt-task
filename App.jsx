/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppContainer from './src/navigation/AppContainer';

function App() {
  return (
    <SafeAreaProvider style={{backgroundColor: '#fff'}}>
      <AppContainer />
    </SafeAreaProvider>
  );
}

export default App;
