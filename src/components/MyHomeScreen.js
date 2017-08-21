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
      tabBarLabel: 'Início',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/homeSelected.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <View>
            <Text>Press button to go wherever you want!!</Text>
            <Button
                onPress={() => this.props.navigation.navigate('Search')}
                title="Go to Search"
                style={styles.buttonStyle}
            />
            <Button
                onPress={() => this.props.navigation.navigate('Orders')}
                title="Go to my orders"
                style={styles.buttonStyle}
            />
            <Button
                onPress={() => this.props.navigation.navigate('Profile')}
                title="Go to Profile"
                style={styles.buttonStyle}
            />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
      
    },
    buttonStyle: {
        alignSelf: 'center',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 50,
        marginBottom: 50,
        paddingTop: 10,
        paddingBottom: 10
    }
  });
