'use strict';
var Swiper = require('react-native-swiper')
var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;
var styles = require('./css/styles');





var FeatureTwo = React.createClass({
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
          <Text style={styles.text}>Welcome to Ikaro</Text>
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
