import React from 'react';
import { Text, View, StyleSheet, Dimensions, Button, TextInput } from 'react-native';
import { Formik } from 'formik';

export default class FormModalScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    data: [],
    isLoading: true
  }

  

  async componentDidMount(){
    // let res = await fetch(`http://localhost:3000/api/tanks${this.props.navigation.getParam('id')}`, { method: 'delete' });
    
    let nextRes = await fetch(`http://www.jct-systems.com/api/tanks/${this.props.navigation.getParam('id')}`);
    let jsonData = await nextRes.json();

    this.setState({data: jsonData[0], isLoading: false});
  }

  render() {
    const { data: { 'id': id, 'WT1': wt1, 'WT2': wt2, 'OT1': ot1, 'OT2': ot2, 'P1': p1, 'P2': p2 }} = this.state;

    return(
      <View style={styles.container}>
        <Button onPress={ () => this.props.navigation.goBack() } title='Back' />

        {
          !this.state.isLoading ? 
        <Formik
          initialValues={{ wt1: `${String(wt1)}`, wt2: `${String(wt2)}`, ot1: `${String(ot1)}`, ot2: `${String(ot2)}`, p1: `${String(p1)}`, p2: `${String(p2)}` }}
          onSubmit={ async (values) => {

            Object.keys(values).forEach(x => {
              values[x] = Number(values[x])

              typeof(values[x]) === NaN ?
                values[x] = null : values[x]
            })

            const config = {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(values)
            }
  
            const res = await fetch(`http://www.jct-systems.com/api/tanks/${id}`, config);

            let nextRes = await fetch('http://www.jct-systems.com/api/tanks');
            let jsonData = await nextRes.json();

            
            this.setState({data: jsonData, isLoading: true});

            this.props.navigation.state.params.onNavigateBack(this.state.data);
            this.props.navigation.goBack();
          }}
        >
          {props => (
            <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <View style={styles.mainContainer}>
              <View style={styles.dataContainer}>
                <Text>WT1</Text>
                <TextInput
                  onChangeText={props.handleChange('wt1')}
                  onBlur={props.handleBlur('wt1')}
                  value={props.values.wt1}
                  style={styles.defaultText}
                />
              </View>
              <View style={styles.dataContainer}>
              <Text>WT2</Text>
              <TextInput
                onChangeText={props.handleChange('wt2')}
                onBlur={props.handleBlur('wt2')}
                value={props.values.wt2}
                style={styles.defaultText}
                />
              </View>
              <View style={styles.dataContainer}>
              <Text>OT1</Text>
              <TextInput
                onChangeText={props.handleChange('ot1')}
                onBlur={props.handleBlur('ot1')}
                value={props.values.ot1}
                style={styles.defaultText}
              />
              </View>
              <View style={styles.dataContainer}>
              <Text>OT2</Text>  
              <TextInput
                onChangeText={props.handleChange('ot2')}
                onBlur={props.handleBlur('ot2')}
                value={props.values.ot2}
                style={styles.defaultText}
                />
              </View>
              <View style={styles.dataContainer}>
              <Text>P1</Text>
              <TextInput
                onChangeText={props.handleChange('p1')}
                onBlur={props.handleBlur('p1')}
                value={props.values.p1}
                style={styles.defaultText}
                />
              </View>
              <View style={styles.dataContainer}>
              <Text>P2</Text>
              <TextInput
                onChangeText={props.handleChange('p2')}
                onBlur={props.handleBlur('p2')}
                value={props.values.p2}
                style={styles.defaultText}
              />
              </View>
              <Button 
                title="Submit" 
                onPress={props.handleSubmit} 
                />
            </View>
            </View>
          )}
        </Formik>
        :
        <View>
          <Text>Loading</Text>
        </View>
        }
      </View>
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
