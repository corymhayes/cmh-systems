import React from 'react';
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      headerMode: 'none'
    }
  }

  render() {
    return(
      <View style={ styles.container }>
        <Text style={{ fontSize: 32 }}>
          Home Screen
        </Text>

        <Button title="to Details" onPress={ () => this.props.navigation.navigate('Details') } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#475565'
  }
})
