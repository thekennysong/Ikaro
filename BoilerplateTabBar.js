'use strict';

var React = require('react-native');
var { TabBarIOS, } = require('react-native-icons');
var TabBarItemIOS = TabBarIOS.Item;
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;
var FeatureOne = require('./FeatureOne/FeatureOne');
var FeatureTwo = require('./FeatureTwo/FeatureTwo');
var FeatureThree = require('./FeatureThree/FeatureThree');

var BoilerplateTabBar = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'secondTab',
      notifCount: 0,
      presses: 0,
    };
  },

  render: function() {
    return (
      <TabBarIOS
        tintColor="black"
        barTintColor="#3abeff"
        styles={styles.tabBar}>
        <TabBarIOS.Item
          title="Counter"
          selected={this.state.selectedTab === 'firstTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'firstTab',
            });
          }}>

          <FeatureOne />

        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Home"
          iconName={'ion|ios-home-outline'}
          iconSize={32}
          selected={this.state.selectedTab === 'secondTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'secondTab',
            });
          }}>

          <FeatureTwo />

        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Calculate"
          selected={this.state.selectedTab === 'thirdTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'thirdTab',
              presses: this.state.presses + 1
            });
          }}>

          <FeatureThree presses={this.state.presses} navigator={this.props.navigator} />

        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

module.exports = BoilerplateTabBar;
