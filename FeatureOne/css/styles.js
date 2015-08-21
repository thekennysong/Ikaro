'use strict';

var React = require('react-native');
var {StyleSheet} = React;

var FeatureOneStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  first:{
  	marginTop: 65,
  	flex:1,
  	height:150,
  },
  second:{
  	flex:1,
  	height:150,  	
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
