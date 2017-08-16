import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Image
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom  } from 'react-navigation';
import MyHomeScreen from './components/MyHomeScreen';
import MyNotificationsScreen from './components/MyNotificationsScreen';
  
 
  
  const MyApp = TabNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  }, {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      showIcon: true
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
   
    
    
  });


  AppRegistry.registerComponent('navigationTab', () => MyApp);
  