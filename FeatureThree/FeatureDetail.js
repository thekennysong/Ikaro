'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} = React;
var styles = require('./css/styles');

var FeatureDetail = React.createClass({
  render: function() {

    return (
      <View style={[styles.tabContent, {backgroundColor: '#4BBAA0'}]}>
  
        <Text style={{fontSize:40, marginTop:10}}>
            Limit {this.props.navigator.navigationContext._currentRoute.passProp.counter} 
        </Text> 

      </View>
    );
  }
});

module.exports = FeatureDetail;
