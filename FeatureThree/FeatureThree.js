'use strict';

var React = require('react-native');
var {
  TextInput,
  Text,
  StyleSheet,
  View,
} = React;

var FeatureThree = React.createClass({
  getInitialState() {
    return {
      value: 0,
      text: 0,
      text2: 0,
    };
  },

  render() {
    return (
      <View>
       <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:90}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
       <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:90}}
          onChangeText={(text2) => this.setState({text2})}
          value={this.state.text2}
        />        
      </View>
    );
  }
});

module.exports = FeatureThree;
