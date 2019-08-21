import React, { Component } from 'react';
import { View, Text } from 'react-native';

const data = {
  leftValveStatus: true,
  rightValueStatus: false
}

export default class StationStatus extends Component {
  render(){
    const { valveSide } = this.props;
    
    return(
      <View
        style={{
          width: 160,
          height: 190,
          backgroundColor: '#8598AD',
          borderRadius: 25,
          paddingVertical: 20,
          paddingHorizontal: 10,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowRadius: 5,
          shadowColor: '#000',
          shadowOpacity: 0.25,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            marginLeft: 10,
            marginBottom: 30,
            fontWeight: '600',
          }}>
          {valveSide} Valve {data.leftValveStatus ? 'On' : 'Off'}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
              Volume
            </Text>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
              0
            </Text>
          </View>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
              Density
            </Text>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
              8.91
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
            Driver
          </Text>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
            Cory Hayes
          </Text>
        </View>
      </View>
    )
  }
}