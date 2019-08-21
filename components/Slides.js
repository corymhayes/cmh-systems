import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native';

const horizontalMargin = 20;
const slideWidth = 225;

const { width } = Dimensions.get('window');
const itemWidth = slideWidth + horizontalMargin * 2;

export default class Slides extends Component{  
  render() {
    const { data: { title, currentLevel, alarmLevel, transferPump, volume, on, off }} = this.props;


    return (
      <View style={styles.slide}>
        <View style={styles.innerContainer}>
          <Text style={styles.slideTitle}>{title}</Text>
          <View style={styles.slideGraph}>
            <View style={{ flex: 0, flexDirection: 'row' }}>
              <View
                style={{
                  position: 'absolute',
                  flex: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  height: 265,
                  width: 275,
                }}>
                <Text
                  style={{
                    fontSize: 32,
                    fontWeight: '600',
                    color: '#fff',
                  }}>
                  {currentLevel}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 5,
                    color: '#fff',
                    fontWeight: '600',
                  }}>
                  /
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 8,
                    color: '#fff',
                    fontWeight: '600',
                  }}>
                  {alarmLevel}.00
                </Text>
              </View>
              <VictoryPie
                data={[
                  { x: ' ', y: alarmLevel - currentLevel },
                  { x: ' ', y: currentLevel },
                ]}
                colorScale={['rgba(255,255,255,.75)', '#F37062']}
                innerRadius={70}
                startAngle={145}
                endAngle={-145}
                standalone={true}
                width={275}
                height={275}
              />
            </View>
          </View>
          <Text style={styles.transferPumpStyle}>
            Transfer Pump {transferPump ? 'Off' : 'On'}
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: 225,
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={{ flex: 0, alignItems: 'center' }}>
              <Text style={{ fontSize: 20, color: '#fff', fontWeight: '600' }}>
                Volume
              </Text>
              <Text style={{ fontSize: 20, color: '#fff', fontWeight: '600' }}>
                {volume}
              </Text>
            </View>
            <View style={{ flex: 0, alignItems: 'center' }}>
              <Text style={{ fontSize: 20, color: '#fff', fontWeight: '600' }}>
                On/Off
              </Text>
              <Text
                style={{ fontSize: 20, color: '#fff', fontWeight: '600' }}>{`${
                on
              }.00 / ${off}.00`}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    marginBottom: 13,
    width: itemWidth,
    backgroundColor: '#8598AD',
    height: 400,
    paddingHorizontal: horizontalMargin,
    borderRadius: 25,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
  },
  innerContainer: {
    width: slideWidth,
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  slideTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 30,
  },
  slideGraph: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginBottom: 30,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transferPumpStyle: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 30,
  },
});