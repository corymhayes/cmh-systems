import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, TextInput, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const horizontalMargin = 20;
const slideWidth = 225;

const { width } = Dimensions.get('window');
const itemWidth = slideWidth + horizontalMargin * 2;

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.mainContainer }>
        <Image style={{ width: 300, resizeMode: 'contain' }} source={require('../logo.jpg')} />
        <TouchableOpacity style={styles.tanksButton} onPress={ () => this.props.navigation.navigate('Details') }>
          <Text style={{ color: 'rgb(255,255,255)', fontSize: 32 }}>Tanks</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#475565',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    paddingTop: 50,
  },
  sectionHeading: {
    marginLeft: 30,
    marginBottom: 20,
    fontSize: 28,
    fontWeight: '600',
    color: 'rgba(255,255,255,.5)',
  },
  tanksButton: {
    height: 50,
    width: 200,
    backgroundColor: '#8598AD',
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});
