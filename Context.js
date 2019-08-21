import React, { Component } from 'react';
import { View } from 'react-native';
export const TankContext = React.createContext();

class Context extends Component {
  state = { 
    data: [12, 34, 56]
  }

  async componentDidMount(){
    const res = await fetch('http://www.jct-systems.com/api/tanks');
    const json = await res.json();

    this.setState({
      data: Object.keys(json).map(x => json[x])
    })
  }

  render() {
    return (
      <TankContext.Provider value={{
        state: this.state
      }}>
        { this.props.children }
      </TankContext.Provider>
    );
  }
}

export default Context;