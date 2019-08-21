import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';

const horizontalMargin = 20;
const slideWidth = 225;

const { width } = Dimensions.get('window');
const itemWidth = slideWidth + horizontalMargin * 2;

export default class App extends React.Component {
  state = {
    data: []
  };


  async componentDidMount(){
    let res = await fetch('http://localhost:3000/api/tanks');
    let jsonData = await res.json();
    this.setState({data: Object.keys(jsonData).map(x => jsonData[x])});
  }

  render() {

    return (
      <View style={{ flex: 1, backgroundColor: '#475565', justifyContent: 'center' }}>
        {
          this.state.data.map( x => (
              <>  
                { 
                  <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center', marginTop: 45, height: 50, width: 375, backgroundColor: '#475565' }}>
                    <View style={{ flex: 0, flexDirection: 'row' }}>
                      { Object.keys(x).map( (y, z) => <Text key={z} style={{ marginRight: 20 }}>{y}</Text> )}
                    </View>

                    <View style={{ flex: 0, flexDirection: 'row' }}>
                      { Object.values(x).map((y, z) => <Text key={z} style={{ marginRight: 20 }}>{y}</Text>) }
                    </View>
                  </View>
                }
              </>
            )
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#475565',
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
