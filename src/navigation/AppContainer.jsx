import React, {createRef, useEffect, useRef, useState} from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {NavigationContainer} from '@react-navigation/native';
import AddIcon from '../assets/icons/AddIcon.jsx';
import {screenMap} from './screenMap.js';
import {
  HomeScreen,
  MoreScreen,
  NotificationScreen,
  ProfileScreen,
} from '../screens/index.js';
import useAppContaner from './useAppContaner.js';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  getFocusedRouteNameFromRoute,
  useFocusEffect,
} from '@react-navigation/native';

export default function AppContainer() {
  const Stack = createNativeStackNavigator();
  const {insets, navigationBarColorHAndler} = useAppContaner();

  useEffect(() => {
    navigationBarColorHAndler();
  }, []);

  const navigationRef = useRef();

  return (
    <NavigationContainer ref={navigationRef}>
      {/* <View style={{height: insets.top, backgroundColor: '#fff'}}>
        <StatusBar barStyle="dark-content" />
      </View> */}
      <Stack.Navigator initialRouteName={'Tabs'}>
        <Stack.Screen
          name="Tabs"
          component={CurveTabBar}
          options={{headerShown: false, gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//------------ Ref Value for Curved Bottom tab -------------//

export const tabBarRef = createRef();

//------------------Curved Tab Bar Code-------------------//

const CurveTabBar = ({navigation, route}) => {
  const {_renderIcon} = useAppContaner();

  useFocusEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (['Tab3'].includes(routeName)) {
      tabBarRef.current.setVisible(false);
    } else {
      tabBarRef.current.setVisible(true);
    }
  });

  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };
  return (
    <CurvedBottomBar.Navigator
      ref={tabBarRef}
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={70}
      circleWidth={60}
      bgColor="#648cbc"
      initialRouteName={screenMap.firstScreen}
      borderTopLeftRight={false}
      screenOptions={{headerShown: false}}
      renderCircle={({selectedTab, navigate}) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Click Action')}>
            <AddIcon />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name={screenMap.firstScreen}
        position="LEFT"
        component={props => <HomeScreen {...props} />}
      />
      <CurvedBottomBar.Screen
        name={screenMap.secondScreen}
        position="LEFT"
        component={() => <MoreScreen />}
      />
      <CurvedBottomBar.Screen
        name={screenMap.thirdScreen}
        component={props => <ProfileScreen {...props} />}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name={screenMap.fourthScreen}
        component={() => <NotificationScreen />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {
    backgroundColor: 'transparent',
  },
  btnCircleUp: {
    marginTop: -5,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    bottom: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    marginTop: 14,
    alignItems: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEBCD',
  },
});
