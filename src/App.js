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
import Search from './components/Search';
import Orders from './components/Orders';
import Profile from './components/Profile';
  
  const MyApp = TabNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Search: {
      screen: Search,
    },
    Orders: {
        screen: Orders,
      },
      Profile: {
        screen: Profile,
      }
  }, {
    tabBarOptions: {
      activeTintColor: 'rgb(255, 255, 255)',
      inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
      showIcon: true,
      style: {
        backgroundColor: 'rgb(65, 62, 60)',
        height: 57
      },
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
   
    
    
  });


  AppRegistry.registerComponent('navigationTab', () => MyApp);
  