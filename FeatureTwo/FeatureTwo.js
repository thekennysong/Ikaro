'use strict';
var Swiper = require('react-native-swiper')
var React = require('react-native');
var DB = require('../db.js');
var DBEvents = require('react-native-db-models').DBEvents;

var {
  StyleSheet,
  Text,
  View,
} = React;
var styles = require('./css/styles');





var FeatureTwo = React.createClass({

  getInitialState: function(){
      return{
        beer: 0, 
        wine: 0, 
        shot: 0,
      };
  },

  componentDidMount: function(){

      DB.users.get_id(14, function(result){
          //console.log(result);
          console.log(result);
          console.log(result[0].Total_Shots);
          console.log(result[0].Total_Beer);
          console.log(result[0].Total_Wine);

        this.setState({shot: result[0].Total_Shots});
        this.setState({beer: result[0].Total_Beer});
        this.setState({wine: result[0].Total_Wine});


      });
        console.log(this.state.shot);
        console.log(this.state.beer);
        console.log(this.state.wine);
    // DB.users.get_all(function(result){
     
    //   console.log(result.rows);
    //   var latest = result.autoinc - 1;
    //   latest = '14';
    //   console.log(result.rows.latest.Total_Shots);
    //   //for(var i = 0; i < result.autoinc; i++){
    //     this.setState({shot: result.rows.latest.Total_Shots});
    //     this.setState({beer: result.rows.latest.Total_Beer});
    //     this.setState({wine: result.rows.latest.Total_Wine});
    //   //}
    // });

  },

  render: function() {
    return (
      <Swiper style={styles.wrapper}
            dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 13, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
            activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
            paginationStyle={{
              bottom: 70,
            }}
            loop={false}>
        <View style={styles.slide1}>
          <Text>{this.state.shot}</Text>  
          <Text>{this.state.beer}</Text>
          <Text>{this.state.wine}</Text>



        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Keep track of your drinks, while learn how much more you can drink.</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>More features coming soon!</Text>
        </View>
      </Swiper>

    );
  }
});

module.exports = FeatureTwo;
