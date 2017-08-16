import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Image
} from 'react-native';

export default class MyHomeScreen extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Home',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/ic_twiter.png')}
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

  const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });
