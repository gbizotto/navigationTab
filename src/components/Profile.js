import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image
} from 'react-native';

export default class Profile extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Perfil',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/profile.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
          <View>
              <Text>Press button to go back to home screen</Text>
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
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
        marginLeft: 10
    }
  });
