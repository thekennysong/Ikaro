'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS,
} = React;
var BoilerplateTabBar = require('./BoilerplateTabBar');


var counting = 0;


var ReactNativeBoilerplate = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Ikaro',
          component: BoilerplateTabBar,
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('ReactNativeBoilerplate', () => ReactNativeBoilerplate);
