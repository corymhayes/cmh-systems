import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';

// or any pure javascript modules available in npm
import Carousel, { Pagination } from 'react-native-snap-carousel';

// import data from './assets/data';
import Slides from './components/Slides';
import StationStatus from './components/StationStatus';



const horizontalMargin = 20;
const slideWidth = 225;

const { width } = Dimensions.get('window');
const itemWidth = slideWidth + horizontalMargin * 2;

export default class App extends React.Component {
  state = {
    activeSlide: 0,
    loaded: true,
    data: []
  };


  async componentDidMount(){
    let res = await fetch('http://localhost:8080/answer');
    let jsonData = await res.json();

    this.setState({data: Object.keys(jsonData).map(x => jsonData[x])});
    // this.setState({loaded: false});
  }

  _renderItem({ item, index }) {
    return (
      <Slides data={item} />
    );
  }

  get pagination() {
    const { activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={this.state.data.length}
        activeDotIndex={activeSlide}
        containerStyle={{ marginTop: -15 }}
        dotStyle={{
          width: 6,
          height: 6,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    return (
      this.state.loaded ?
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.sectionHeading}>
            Tanks
          </Text>
          <Carousel
            layout={'default'}
            data={this.state.data}
            renderItem={this._renderItem}
            sliderHeight={575}
            sliderWidth={width}
            itemWidth={itemWidth}
            inactiveSlideOpacity={1}
            inactiveSlideScale={0.8}
            inactiveSlideShift={10}
            onSnapToItem={index => this.setState({ activeSlide: index })}
            />
          {this.pagination}
        </View>
        <Text style={styles.sectionHeading}>Station Status</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <StationStatus valveSide='Left'/>
          <StationStatus valveSide='Right'/>
        </View>
      </View>
      :
      <View style={styles.mainContainer}>HELLO</View>
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
