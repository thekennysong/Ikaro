'use strict';

var React = require('react-native');
var DB = require('../db.js');
var DB2 = require('../db2.js');
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
      DB2.limit.get_all(function(result){
        console.log(result);
        latestId = result.autoinc - 1;

        DB2.limit.get_id(latestId, function(result){
            //console.log(result);
            console.log('ff' + result);
            drinkLimit = result[0].Drink_Limit;
        });

      });



      setTimeout(() => {
          this.setState({limit: drinkLimit});
      },100); 
  },  

  _onPressButtonBeer: function() {
    console.log(this.props.children);
    this.setState({beer: this.state.beer + 1});
    
    setTimeout(() => {
      this.setState({hour: this.state.hour + 1});
    },3600000);

    // if(this.state.wine + this.state.beer + this.state.shot - this.state.hour < 0){
    //     AlertIOS.alert('STOP DRINKING FOOL!');
    // }
    DB.users.get_all(function(result){
        console.log(result);
    });

    // DB.users.erase_db(function(removed_data){
    //     console.log(removed_data);
    // });   

  },

  _onPressButtonWine: function() {
    console.log("Pressed!");
    this.setState({wine: this.state.wine + 1});

    setTimeout(() => {
      this.setState({hour: this.state.hour + 1});
    },3600000); 
    

  },
  
  _onPressButtonShots: function() {
    console.log("Pressed!");
    this.setState({shot: this.state.shot + 1});
    
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
    this.setState({shot:0});
    this.setState({beer:0});
    this.setState({wine:0});
    this.setState({hour:0});

  },

  // componentWillReceiveProps:function(){
  //   var currentTotal = 0;

  //     DB.users.add({
  //         Current_Total: this.state.shot+this.state.beer+this.state.wine
  //       }, function(added_data){
  //           console.log(added_data); 
  //     });

  //     DB.users.get_all(function(result){
  //       console.log(result);
  //       latestId = result.autoinc - 1;

  //       DB.users.get_id(latestId, function(result){
  //           //console.log(result);
  //         currentTotal = result[0].Current_Total;

  //       });

  //     });
  

  //   setTimeout(() => {
  //       this.setState({total: currentTotal});
  //   },100); 


  //},

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
        <Text style={styles.limit}>You can have <Text style={styles.red}>{this.state.limit-(this.state.wine + this.state.beer + this.state.shot - this.state.hour)}</Text> before blacking out</Text>

        <Text style={styles.center} onPress={this.sendStatstoDB}>
            End Drinking Session
        </Text>
      </View>
    );
  }


});

module.exports = FeatureOne;
