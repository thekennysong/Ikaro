'use strict';

var Button = require('react-native-button')
var React = require('react-native');
var Slider = require('react-native-slider');

var {
  TextInput,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} = React;

var FeatureDetail = require('./FeatureDetail');


var styles = require('./css/styles');
var object = {};

var FeatureThree = React.createClass({
  getInitialState() {
    return {
      value: .5,
      value2: .5,
      value3: .5,
      counter: 0,
    };
  },
  calculation() {

      var counting = 0;
      var rounded = 0;
      var rounded2 = 0;
      var rounded3 = 0;


      rounded = Math.round(this.state.value * 10);
      rounded2 = Math.round(this.state.value2 * 10);
      rounded3 = Math.round(this.state.value3 * 10);

      if(rounded == 5){
        counting = 2;
      }
      else{
        counting = 0;
      }

      console.log(counting);

      if(rounded2 == 10 || rounded2 == 9){
        counting += 0;
      }
      else{
        counting += 3;
      }

      if(0 < rounded3 < 6){
        counting += 4;
      }
      else{
        counting += 1;
      }
      
      this.setState({counter: counting});
   

    var detailRoute = {
      component: FeatureDetail,
      title: 'Drink Limit',
      passProp: {counter: counting},
    };

    this.props.navigator.push(detailRoute);

  },
    
  render() {
    return (
      <View>
      <Text style={{color:'black', marginTop:90}}>
        What is 1+10-(2+1)*2? 
      </Text>
          <Slider
          value={this.state.value}
          onValueChange={(value) => this.setState({value})}
            style={styles.container}
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            minimumTrackTintColor='#31a4db'
            thumbTouchSize={{width: 50, height: 40}}
          />
        <Text>Value: {Math.round(this.state.value * 10)}</Text>  


      <Text style={{color:'black', marginTop:20}}>  
        On a scale from 1 to 10, how badly do you miss your ex? 
      </Text>
          <Slider
          value={this.state.value2}
          onValueChange={(value2) => this.setState({value2})}
            style={styles.container}
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            minimumTrackTintColor='#31a4db'
            thumbTouchSize={{width: 50, height: 40}}
          />
        <Text>Value: {Math.round(this.state.value2 * 10)}</Text> 

      <Text style={{color:'black', marginTop:20}}>  
        On a scale from 1 to 10, how cool are you? 
      </Text>
          <Slider
          value={this.state.value3}
          onValueChange={(value3) => this.setState({value3})}
            style={styles.container}
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            minimumTrackTintColor='#31a4db'
            thumbTouchSize={{width: 50, height: 40}}
          />
        <Text>Value: {Math.round(this.state.value3 * 10)}</Text> 
      <Button onPress={this.calculation}>
        Calculate!
      </Button>
              
      </View>
    );
  }
});

module.exports = FeatureThree;
