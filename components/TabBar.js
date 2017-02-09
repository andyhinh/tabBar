import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Tab from './Tab'
import styles from '../styles/TabBarStyles'

export default class TabBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null
    }
  }

  selectTab = (selected) => {
    this.setState({ selected })
    this.props.setScreen(selected)
  }

  checkSelected = (tabName) => {
    return this.state.selected === tabName
  }

  componentDidMount = () => {
    this.setState({ selected: 'Tab1' })
  }

  render() {
    return (
    <View style={styles.container}>
      <Tab
        name='Tab1'
        selected={this.checkSelected('Tab1')}
        selectTab={this.selectTab}
      />
      <Tab
        name='Tab2'
        selected={this.checkSelected('Tab2')}
        selectTab={this.selectTab}
      />
      <Tab
        name='Tab3'
        selected={this.checkSelected('Tab3')}
        selectTab={this.selectTab}
      />
    </View>
    );
  }
}

TabBar.propTypes = {
  setScreen: React.PropTypes.func.isRequired
}
