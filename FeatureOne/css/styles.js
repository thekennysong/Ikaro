'use strict';

var React = require('react-native');
var {StyleSheet} = React;

var FeatureOneStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
    height: 500,
  },
  first:{
  	paddingTop: 80,
  	flex:1,
  	height:180,
  },
  second:{
  	flex:1,
  	height:120,  	
  },
  third:{
  	flex: 1, 
  	height: 120,
  },
  beer:{
  	opacity: 0,
  },
  wine:{
  	opacity: 0,
  },
  kennyStuff: {
  	color: '#008A2E'
  },
  total: {
  	fontSize: 50,
  	paddingTop: 10,
	textAlign: 'center',
  },
  limit: {
  	fontSize: 20,
  	paddingTop: 10,
  	textAlign: 'center',
  },
  red: {
  	color: 'red',
  	fontSize: 40,
  },

});

module.exports = FeatureOneStyles
