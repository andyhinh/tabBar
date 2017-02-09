import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';
import styles from '../styles/TabStyles'

export default class Tab extends Component {
  render() {
    let background
    this.props.selected ?
      background = { backgroundColor: 'rgba(0,0,0,0.4)' }
      : null

    return (
    <TouchableHighlight
      style={[styles.container, background]}
      onPress={() => this.props.selectTab(this.props.name)}
    >
      <Text>{this.props.name}</Text>
    </TouchableHighlight>
    );
  }
}

Tab.propTypes = {
  name: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool.isRequired,
  selectTab: React.PropTypes.func.isRequired
}
