'use strict';

var Button = require('react-native-button')
var React = require('react-native');
var Slider = require('react-native-slider');

var {
  TextInput,
  Text,
  StyleSheet,
  View,
} = React;

var styles = require('./css/styles');

var FeatureThree = React.createClass({
  getInitialState() {
    return {
      answer1: '',
      answer2: '',
      answer3: '',
      counter: 0,
      value: 0.2,
    };
  },

  calculation(){
      var counting = 0;

      if(this.state.answer1 != 5){
        counting += 0;
      }
      else{
        counting += 2;
      }
      if(this.state.answer2 == 10 || this.state.answer2 == 9){
        counting += 0;
      }
      else{
        counting += 3;
      }
      if(0 < this.state.answer3 < 6){
        counting += 4;
      }
      else{
        counting += 1;
      }
      
      this.setState({counter: counting});
      
      
  },
      

  render() {
    return (
      <View>
      <Text style={{color:'black', marginTop:90}}>
        What is 1+10-(2+1)*2? 
      </Text>
       <TextInput
          style={{height: 40, borderColor: '#FFA347', borderWidth: 1, marginTop:10}}
          onChangeText={(answer1) => this.setState({answer1})}
          value={this.state.answer1} placeholder='Type Here'
        />

      <Text style={{color:'black', marginTop:20}}>  
        On a scale from 1 to 10, how badly do you miss your ex? 
      </Text>
       <TextInput
          style={{height: 40, borderColor: '#FFA347', borderWidth: 1, marginTop:10}}
          onChangeText={(answer2) => this.setState({answer2})}
          value={this.state.answer2} placeholder='Type Here'
        />

      <Text style={{color:'black', marginTop:20}}>  
        On a scale from 1 to 10, how cool are you? 
      </Text>
       <TextInput
          style={{height: 40, borderColor: '#FFA347', borderWidth: 1, marginTop:10}}
          onChangeText={(answer3) => this.setState({answer3})}
          value={this.state.answer3} placeholder='Type Here'
        />
      <Button style={{color: 'green', marginTop:'10'}} onPress={this.calculation}>
        Calculate!
      </Button>
        <Text style={{fontSize:40, marginTop:10}}>
            Drink limit for the rest of the night: {this.state.counter} 
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
        <Text>Value: {this.state.value}</Text>                   
      </View>
    );
  }
});

module.exports = FeatureThree;
