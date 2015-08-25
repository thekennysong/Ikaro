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

      var totalShots = 0;
      var totalBeer = 0;
      var totalWine = 0;

      DB.users.get_id(14, function(result){
          //console.log(result);
          console.log(result);
          totalShots = result[0].Total_Shots;
          totalBeer = result[0].Total_Beer;
          totalWine = result[0].Total_Wine;

          console.log(totalShots);
          console.log(totalBeer);
          console.log(totalWine);



      });
      setTimeout(() => {
          this.setState({shot: totalShots});
          this.setState({beer: totalBeer});
          this.setState({wine: totalWine});
      },300); 

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
