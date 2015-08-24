'use strict';

var Button = require('react-native-button')
var React = require('react-native');
var {
  TextInput,
  Text,
  StyleSheet,
  View,
} = React;

var FeatureThree = React.createClass({
  getInitialState() {
    return {
      answer1: '',
      answer2: '',
      answer3: '',
      counter: 0,
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
      </View>
    );
  }
});

module.exports = FeatureThree;
