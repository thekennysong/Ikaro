'use strict';

var React = require('react-native');
var DB = require('../db.js');
var DBEvents = require('react-native-db-models').DBEvents;
var Button = require('react-native-button');

var {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  AlertIOS,
  PushNotificationIOS,
  TouchableOpacity,
  Button,
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
      total: 0,
      limit: 0,
    }
  },

  componentWillMount: function(){
    var drinkLimit = 0;
    var latestId = 0;
    var currentBeer = 0;
    var currentWine = 0;
    var currentShot = 0;

      DB.limit.get_all(function(result){
        console.log(result);
        latestId = result.autoinc - 1;

        DB.limit.get_id(latestId, function(result){
            //console.log(result);
            console.log('ff' + result);
            drinkLimit = result[0].Drink_Limit;
            currentBeer = result[0].beer;
            currentWine = result[0].wine;
            currentShot = result[0].shot;
        });

      });



      setTimeout(() => {
          this.setState({limit: drinkLimit});
          this.setState({beer: currentBeer});
          this.setState({wine: currentWine});
          this.setState({shot: currentShot});
          // this.setState({total: currentBeer+currentWine+currentShot});
      },100); 
  },  

  _onPressButtonBeer: function() {
    //console.log(this.props.children);
    this.setState({beer: this.state.beer + 1});
    this.setState({total: this.state.total + 1});
 

    DB.limit.update({
        beer: 0
    },{beer:this.state.beer}, function(added_data){
        console.log(added_data); 
    });

    console.log(this.state.beer);

    DB.limit.update({
        beer: this.state.beer
    },{beer:this.state.beer+1}, function(added_data){
        console.log(added_data); 
    });



    setTimeout(() => {
      this.setState({hour: this.state.hour + 1});
    },3600000);

    DB.users.get_all(function(result){
        console.log(result);
    });

  },

  _onPressButtonWine: function() {
    //console.log("Pressed!");
    this.setState({wine: this.state.wine + 1});
    this.setState({total: this.state.total + 1});
 

    DB.limit.update({
        wine: 0
    },{wine:this.state.wine}, function(added_data){
        console.log(added_data); 
    });

    console.log(this.state.wine);

    DB.limit.update({
        wine: this.state.wine
    },{wine:this.state.wine+1}, function(added_data){
        console.log(added_data); 
    });


    setTimeout(() => {
      this.setState({hour: this.state.hour + 1});
    },3600000); 
    

  },
  
  _onPressButtonShots: function() {
    console.log("Pressed!");
    this.setState({shot: this.state.shot + 1});
    console.log('sgits' + this.state.shot);

    DB.limit.update({
        shot: 0
    },{shot:this.state.shot}, function(added_data){
        console.log(added_data); 
    });

    console.log(this.state.shot);

    DB.limit.update({
        shot: this.state.shot
    },{shot:this.state.shot+1}, function(added_data){
        console.log(added_data); 
    });    
    setTimeout(() => {
      this.setState({hour: this.state.hour + 1});
    },3600000); 

    // if(this.state.wine + this.state.beer + this.state.shot - this.state.hour < 0){
    //     React.AlertIOS.alert('STOP DRINKING FOOL!');
    // }
  },

  sendStatstoDB: function(){
    //once someone clicks the first button, the timeout begins
    DB.users.add({
      Total_Shots: this.state.shot,
      Total_Beer: this.state.beer,
      Total_Wine: this.state.wine, 
      Drinking_Session_Time: this.state.hour
    }, function(added_data){
        console.log(added_data); 
    });
    DB.limit.add({
        Drink_Limit: 10,
        beer: 0,
        wine: 0,
        shot: 0,
    }, function(added_data){
        console.log(added_data); 
    });


    this.setState({shot:0});
    this.setState({beer:0});
    this.setState({wine:0});
    this.setState({hour:0});

  },

  render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressButtonBeer}>
           <Image onPress={this._onPressButtonBeer} source={{uri:'http://usboattours.com/1000islands/wp-content/uploads/2014/05/craft-beer.jpg'}} style={styles.first}>
            </Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabText} onPress={this._onPressButtonWine}>
          <Image onPress={this._onPressButtonWine} source={{uri:'http://killerwineclub.com/wp-content/uploads/2014/02/wine-of-all-colors.jpg'}} style={styles.second}>
            </Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabText} onPress={this._onPressButtonShots}>
          <Image onPress={this._onPressButtonShots} source={{uri:'http://2kmk4i20p6352e7ivi10xo0x8xo.wpengine.netdna-cdn.com/wp-content/uploads/2013/01/Shots.jpg'}} style={styles.third}>
            </Image>
        </TouchableOpacity>


        <Text style={styles.total}>{this.state.beer+this.state.wine+this.state.shot - this.state.hour}</Text>
        <Text style={styles.limit}>You can have <Text style={styles.red}>{this.state.limit-(this.state.wine + this.state.beer + this.state.shot - this.state.hour)}</Text> before blacking out</Text>

        <Text style={styles.center} onPress={this.sendStatstoDB}>
            End Drinking Session
        </Text>
      </View>
    );
  }


});

module.exports = FeatureOne;
