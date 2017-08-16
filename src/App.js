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

class MyHomeScreen extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Home',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./ic_twiter.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      );
    }
  }
  
  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Notifications',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./ic_done.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });
  
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
  