import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class Tanks extends Component {
  // handleOnNavigateBack = (foo) => {
  //   this.setState({
  //     data: foo
  //   })
  // }
  render(){
    const { data: { WT1, WT2, OT1, OT2, P1, P2 }} = this.props; 

    return(
      // <TouchableWithoutFeedback onPress={ () => this.props.navigation.navigate('FormModal', { 
      //   onNavigateBack: this.handleOnNavigateBack,
      //   id: this.props.data.id
      // })}>

      <View style={styles.mainContainer}>
        <View style={styles.dataContainer}>
          <Text style={styles.defaultText}>
            WT1
          </Text>
          <Text style={styles.defaultText}>
            {WT1}
          </Text>        
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.defaultText}>
            WT2
          </Text>
          <Text style={styles.defaultText}>
            {WT2}
          </Text>        
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.defaultText}>
            OT1
          </Text>
          <Text style={styles.defaultText}>
            {OT1}
          </Text>        
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.defaultText}>
            OT2
          </Text>
          <Text style={styles.defaultText}>
            {OT2}
          </Text>        
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.defaultText}>
            P1
          </Text>
          <Text style={styles.defaultText}>
            {P1}
          </Text>        
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.defaultText}>
            P1
          </Text>
          <Text style={styles.defaultText}>
            {P2}
          </Text>        
        </View>
      </View>
      // </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-around',
    flexWrap: 'wrap',
    width: 225,
    height: 300,
    paddingVertical: 25,
    marginBottom: 20,
    backgroundColor: '#8598AD',
    borderRadius: 25,
    // paddingVertical: 20,
    // paddingHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
  }, 
  dataContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 25,
  },  
  defaultText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  }
})

        {/* <TouchableOpacity onPress={clicky}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              marginLeft: 10,
              fontWeight: '600',
              alignSelf: 'flex-end'
            }}>
            X
          </Text>
        </TouchableOpacity> */}

export default withNavigation(Tanks)