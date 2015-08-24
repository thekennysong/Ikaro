'use strict';

var React = require('react-native');
var {StyleSheet} = React;

var FeatureThreeStyles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  image: {
    height: 50,
    width: 50,
  },
  container: {
    height: 20,
  },
  track: {
    height: 2,
    backgroundColor: '#303030',
  },
  thumb: {
    width: 10,
    height: 10,
    backgroundColor: '#31a4db',
    borderRadius: 10 / 2,
    shadowColor: '#31a4db',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 1,
  },  
});

module.exports = FeatureThreeStyles
