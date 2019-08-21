import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import FormModalScreen from './screens/FormModalScreen';


const MainStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailScreen
},{
  initialRouteName: 'Home',
  headerMode: 'none'
});

const RootStack = createStackNavigator({
  Main: {
    screen: MainStack
  },
  FormModal: {
    screen: FormModalScreen
  }
},{
  mode: 'modal',
  headerMode: 'none'
});

const AppContainer = createAppContainer(RootStack)

class App extends React.Component{
  render(){
    return <AppContainer />;
  }
};

export default App;
