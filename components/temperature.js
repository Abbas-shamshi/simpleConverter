import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TextInput,
  Picker,
} from 'react-native';
import globalStyle from '../style'

// import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class TemperatureVC extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    ValueA: '',
        ValueB: '',
        from: 'Celsius',
        to: 'Kelvin',
        exchangeImage: 'https://newtonfoxbds.com/wp-content/uploads/2017/01/Two_way-data-exchange.gif',
  };

  //   Other conversion functions
  celToFaht = (valueA) => {
    this.setState({
      valueA,
      valueB: String((parseInt(valueA) * 1.8 + 32).toFixed(2)),
    });
  };
  fahtToCel = (valueB) => {
    this.setState({
      valueB,
      valueA: String((parseInt(valueB) - 32) * (5 / 9).toFixed(2)),
    });
  };

  kelToCel = (valueC) => {
    this.setState({
      valueC,
      valueD: String((parseInt(valueC) - 273.15).toFixed(2)),
    });
  };
  celToKel = (valueD) => {
    this.setState({
      valueD,
      valueC: String((parseInt(valueD) + 273.15).toFixed(2)),
    });
  };
  navigator(value) {
    console.log("Hello navigation")
    this.props.navigation.navigate(value)

  }
  clear = () => {
    this.setState({
      ValueA: '',
      ValueB: '',
    })
  }
  valuePicker(itemValue,pickerNO){
    if(pickerNO == 'picker1'){
      this.setState({
        from: itemValue,
        ValueA: '0',
        ValueB: '0',
      })
    }else if (pickerNO == 'picker2'){
      this.setState({
        to: itemValue,
        ValueA: '0',
        ValueB: '0',
      })
    }
  }
  converter(value, input) {
    console.log(input);

    if (input == 'value1') {
      this.setState({
        ValueA: value,
      })
      if (this.state.from == 'Celsius' && this.state.to == 'Kelvin') {
        this.setState({
          ValueB: String((parseInt(value) + 273.15).toFixed(2)),
        });
        console.log('Celsius TO Kelvin')
      } else if (this.state.from == 'Celsius' && this.state.to == 'Frhn') {
        this.setState({
          ValueB: String(((parseInt(value) * (9/5)+32)).toFixed(2)),
        });
        console.log('Celsius TO Frhn')
      }  else if (this.state.from == 'Kelvin' && this.state.to == 'Celsius') {
        this.setState({
          ValueB: String((parseInt(value) - 273.15).toFixed(2)),
        });
        console.log('Kelvin TO Celsius')
      } else if (this.state.from == 'Kelvin' && this.state.to == 'Frhn') {
        this.setState({
          ValueB: String(((parseInt(value) - 273.15)*(9/5)+32).toFixed(2)),
        });
        console.log('Kelvin TO Frhn')
      }  else if (this.state.from == 'Frhn' && this.state.to == 'Celsius') {
        this.setState({
          ValueB: String(((parseInt(value) - 32)*(5/9)).toFixed(2)),
        });
        console.log('Frhn TO Celsius')
      } else if (this.state.from == 'Frhn' && this.state.to == 'Kelvin') {
        this.setState({
          ValueB: String(((parseInt(value) -32)*(5/9)+273.15).toFixed(2)),
        });
        console.log('Frhn TO Kelvin')
      } else if (this.state.from == 'Celsius' && this.state.to == 'Celsius') {
        this.setState({
          ValueB: value,
        });
        console.log('Celsius TO Celsius')
      } else if (this.state.from == 'Kelvin' && this.state.to == 'Kelvin') {
        this.setState({
          ValueB: value,
        });
        console.log('Kelvin TO Kelvin')
      }

    } /* else if (input == 'value2') {
      const frm = this.state.from;
      this.setState({
        ValueB: value,
        from: this.state.to,
        to: frm,
      }) 
      
    }*/
    



  }

  render() {
    return (
      <ScrollView>
        <View style={globalStyle.container}>
          <View style={globalStyle.headContainer}>
            <View style={globalStyle.headTextContainer}>
              <Picker
                selectedValue={this.state.fromCurrency}
                style={globalStyle.pickerHeader}
                onValueChange={(value) => this.navigator(value)}
              >
                <Picker.Item label="Temperature Converter" value="Temperature" />
                <Picker.Item label="Currency Converter" value="Currency" />
                <Picker.Item label="Distance Converter" value="Distance" />
                {/* <Picker.Item label="Measure Converter" value="Measure" /> */}
                <Picker.Item label="Speed Converter" value="Speed" />
                <Picker.Item label="Weight Converter" value="Weight" />

              </Picker>
            </View>
          </View>


          <View style={globalStyle.conversionContainer}>
            <View style={globalStyle.imageConatiner}>
              <Image
                style={globalStyle.currencyImage}
                source={{ uri: this.state.exchangeImage }} />

            </View>

            <View style={globalStyle.dropDownContainer}>
              <Picker
                selectedValue={this.state.from}
                style={globalStyle.picker}
                onValueChange={(itemValue) => this.valuePicker(itemValue,'picker1')}
              >
                <Picker.Item label="Celsius" value="Celsius" />
                <Picker.Item label="Kelvin" value="Kelvin" />
                <Picker.Item label="Fahrenheit " value="Frhn" />
              </Picker>
              <Picker
                selectedValue={this.state.to}
                style={globalStyle.picker}
                onValueChange={(itemValue) => this.valuePicker(itemValue,'picker2')}
              >
                <Picker.Item label="Celsius" value="Celsius" />
                <Picker.Item label="Kelvin" value="Kelvin" />
                <Picker.Item label="Fahrenheit " value="Frhn" />

              </Picker>
            </View>

            <View style={globalStyle.inputBoxContainer}>
              <View style={globalStyle.currencyValueContainer}>
                <Text style={globalStyle.CurrencyValue}>
                  {this.state.from}
                </Text>
              </View>
              <TextInput
                style={globalStyle.inputBox}
                keyboardType={'numeric'}
                placeholder={'Enter Value'}

                value={this.state.ValueA}
                onChangeText={(value) => this.converter(value, 'value1')}
              />


            </View>
            <View style={globalStyle.inputBoxContainer}>
              <View style={globalStyle.currencyValueContainer}>
                <Text style={globalStyle.CurrencyValue}>
                  {this.state.to}
                </Text>
              </View>
              <TextInput
                editable={false} 

                style={globalStyle.inputBox}
                keyboardType={'numeric'}
                value={this.state.ValueB}
                onChangeText={(value) => this.converter(value, 'value2')}
              />


            </View>
            <TouchableOpacity
              onPress={this.clear}>
              <View style={globalStyle.inputBoxContainer}>
                <View style={globalStyle.button} >
                  <Text style={globalStyle.btnText}>
                    Clear
                  </Text>
                </View>

              </View>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    );
  }
}
