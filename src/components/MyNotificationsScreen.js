import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Image
} from 'react-native';

export default class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Notifications',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/ic_done.png')}
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
