'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} = React;
var styles = require('./css/styles');

var FeatureOne = React.createClass({

  getInitialState: function() {
    return {
      beer: 0,
      wine: 0,
    }
  },

  _onPressButtonBeer: function() {
    console.log("Pressed!");
    this.setState({beer: this.state.beer + 1});
  },

  _onPressButtonWine: function() {
    console.log("Pressed!");
    this.setState({wine: this.state.wine + 1});
  },

  render: function() {
    return (
      <View style={[styles.container]}>
        <TouchableOpacity style={styles.first} onPress={this._onPressButtonBeer}>
           <Image onPress={this._onPressButtonBeer} source={{uri:'http://davisbeerweek.com/wp-content/uploads/2014/03/Craft-Beer.jpeg'}} style={styles.first}>
            </Image>
        </TouchableOpacity>
        <Text style={styles.beer}>{this.state.beer}</Text>

        <TouchableOpacity style={styles.tabText} onPress={this._onPressButtonWine}>
          <Image onPress={this._onPressButtonBeer} source={{uri:'http://killerwineclub.com/wp-content/uploads/2014/02/wine-of-all-colors.jpg'}} style={styles.first}>
            </Image>
        </TouchableOpacity>
        <Text style={styles.wine}>{this.state.wine}</Text>

        <Text style={styles.total}>{this.state.wine + this.state.beer}</Text>
        <Text style={styles.limit}>You can have <Text style={styles.red}>{10-(this.state.wine + this.state.beer)}</Text> before blacking out</Text>

      </View>
    );
  }


});

module.exports = FeatureOne;
