import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

// Components
import Tabbar from './components/TabBar'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/Screen3'

// Data

// Styles
import styles from './styles/AppStyles'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentScreen: Screen1
    }
  }

  setScreen = (currentScreen) => {
    if (currentScreen === 'Tab1') {
      this.setState({ currentScreen: Screen1 })
    }
    if (currentScreen === 'Tab2') {
      this.setState({ currentScreen: Screen2 })
    }
    if (currentScreen === 'Tab3') {
      this.setState({ currentScreen: Screen3 })
    }
  }

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.renderArea}>
        <this.state.currentScreen />
      </View>
      <View style={styles.tabBar}>
        <Tabbar
          setScreen={this.setScreen}
        />
      </View>
    </View>
    );
  }
}
