'use strict';

var React = require('react-native');
var {StyleSheet} = React;

var FeatureThreeStyles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex:1,
    alignItems: 'center',
    textAlign: 'center',
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
    height: 70,
  },
  track: {
    height: 5,
    backgroundColor: '#303030',
  },
  thumb: {
    width: 25,
    height: 25,
    backgroundColor: '#31a4db',
    borderRadius: 25 / 2,
    shadowColor: '#31a4db',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 1,
  },  
});

module.exports = FeatureThreeStyles
