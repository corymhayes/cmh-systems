import React from 'react';
import { Text, View, StyleSheet, Dimensions, Button, ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import Tanks from '../components/Tanks';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const horizontalMargin = 0;
const slideWidth = 225;

const { width } = Dimensions.get('window');
const itemWidth = slideWidth + horizontalMargin * 2;

class DetailScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      activeSlide: 0,
      data: [],
      isLoaded: false
    };

    this._renderItem = this._renderItem.bind(this);

  }
  
  // clicky = async (id) => {
  //   let res = await fetch(`http://localhost:3000/api/tanks${id}`, { method: 'delete' });
    
  //   let nextRes = await fetch('http://localhost:3000/api/tanks');
  //   let jsonData = await nextRes.json();


  //   this.setState({data: Object.keys(jsonData).map(x => jsonData[x])});

  // }

  async componentDidMount(){
    let res = await fetch('http://www.jct-systems.com/api/tanks');
    let jsonData = await res.json();

    this.setState({
      data: Object.keys(jsonData).map(x => jsonData[x]),
      isLoaded: true
    });
  }

  // _renderItem({ item, index }) {
  //   return (
  //     <Tanks data={item} />
  //   );
  // }
  _renderItem({ item, index }) {
    return (
      <TouchableWithoutFeedback onPress={ () => this.props.navigation.navigate('FormModal', { 
        onNavigateBack: this.handleOnNavigateBack,
        id: item.id
        })}
      >
        <Tanks data={item}/>
      </TouchableWithoutFeedback>
    );
  }

  handleOnNavigateBack = (foo) => {
    console.log(foo);
    this.setState({
      data: foo,
      isLoaded: true
    })
  }
  
  get pagination() {
    const { activeSlide } = this.state;
    
    return (
      this.state.isLoaded ? 
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
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      :
      <Text>HELLO</Text>
    )
  }

  render() {
    let keys = Object.values(this.state.data);

    return(

      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Carousel
            layout={'default'}
            data={keys}
            renderItem={this._renderItem}
            sliderHeight={575}
            sliderWidth={width}
            itemWidth={itemWidth}
            inactiveSlideOpacity={1}
            inactiveSlideScale={.9}
            // inactiveSlideShift={5}
            onSnapToItem={index => this.setState({ activeSlide: index })}
            />
          {this.pagination}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#475565',
    justifyContent: 'center'
  },
  sectionHeading: {
    marginLeft: 30,
    marginBottom: 20,
    fontSize: 28,
    fontWeight: '600',
    color: 'rgba(255,255,255,.5)',
  }
});


export default withNavigation(DetailScreen)