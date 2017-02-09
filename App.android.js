import React, { Component } from 'react';
import {
  View
} from 'react-native';

// Components
import Tabbar from './components/TabBar'

// Data

// Styles
import styles from './styles/AppStyles'

export default class App extends Component {
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.renderArea}>

      </View>
      <View style={styles.tabBar}>
        <Tabbar />
      </View>
    </View>
    );
  }
}
