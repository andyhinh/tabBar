import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';


// Data

// Styles
import styles from '../styles/AppStyles'

export default class Screen1 extends Component {
  render() {
    return (
    <View style={styles.container}>
      <Text>I am screen 1</Text>
    </View>
    );
  }
}
