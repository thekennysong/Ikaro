'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} = React;
var styles = require('./css/styles');

var FeatureOne = React.createClass({

  getInitialState: function() {
    return {
      beer: 0,
      wine: 0,
      shot: 0,
      hour: 0,
    }
  },

  _onPressButtonBeer: function() {
    console.log("Pressed!");
    this.setState({beer: this.state.beer + 1});
    subtract();
  },

  _onPressButtonWine: function() {
    console.log("Pressed!");
    this.setState({wine: this.state.wine + 1});
    subtract();
  },
  
  _onPressButtonShots: function() {
    console.log("Pressed!");
    this.setState({shot: this.state.shot + 1});
    subtract();
  },
  subtract: function(){
    setTimeout(() => {
      this.setState({hour: this.state.hour + 1});
    },3600000); 
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressButtonBeer}>
           <Image onPress={this._onPressButtonBeer} source={{uri:'http://usboattours.com/1000islands/wp-content/uploads/2014/05/craft-beer.jpg'}} style={styles.first}>
            </Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabText} onPress={this._onPressButtonWine}>
          <Image onPress={this._onPressButtonBeer} source={{uri:'http://killerwineclub.com/wp-content/uploads/2014/02/wine-of-all-colors.jpg'}} style={styles.second}>
            </Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabText} onPress={this._onPressButtonShots}>
          <Image onPress={this._onPressButtonShots} source={{uri:'http://2kmk4i20p6352e7ivi10xo0x8xo.wpengine.netdna-cdn.com/wp-content/uploads/2013/01/Shots.jpg'}} style={styles.third}>
            </Image>
        </TouchableOpacity>


        <Text style={styles.total}>{this.state.wine + this.state.beer + this.state.shot - this.state.hour}</Text>
        <Text style={styles.limit}>You can have <Text style={styles.red}>{10-(this.state.wine + this.state.beer + this.state.shot - this.state.hour)}</Text> before blacking out</Text>

      </View>
    );
  }


});

module.exports = FeatureOne;
