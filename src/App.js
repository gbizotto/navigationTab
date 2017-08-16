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
      activeTintColor: 'rgb(255, 255, 255)',
      inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
      showIcon: true,
      style: {
        backgroundColor: 'rgb(65, 62, 60)',
      },
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
   
    
    
  });


  AppRegistry.registerComponent('navigationTab', () => MyApp);
  