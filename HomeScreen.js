import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';

import Tanks from './components/Tanks'
import { directive } from '@babel/types';

const horizontalMargin = 20;
const slideWidth = 225;

const { width } = Dimensions.get('window');
const itemWidth = slideWidth + horizontalMargin * 2;

export default class App extends React.Component {
  state = {
    data: []
  };


  async componentDidMount(){
    let res = await fetch('http://www.jct-systems.com/api/tanks');
    let jsonData = await res.json();

    this.setState({data: Object.keys(jsonData).map(x => jsonData[x])});
    // this.setState({loaded: false});
  }

  render() {
    let keys = Object.values(this.state.data);

    return (
      <ScrollView style={styles.mainContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          {
            keys.map(x => Object.keys(x).map((y, index) => <Tanks key={index} tankName={y} tankLevel={x[y]} /> ))
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#475565',
    paddingTop: 50
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
  }
});
