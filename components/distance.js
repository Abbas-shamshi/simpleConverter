import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import globalStyle from '../style'
import LinearGradient from 'react-native-linear-gradient';

export default class DistanceVC extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    ValueA: '',
    ValueB: '',
    from: 'KM',
    to: 'CM',
    exchangeImage: 'https://newtonfoxbds.com/wp-content/uploads/2017/01/Two_way-data-exchange.gif',
    navName: "Distance"
  };


  //========================= Identify and Calculate ================================

  converter(value, input) {
    console.log(input);
    if (input == 'value1') {
      this.setState({
        ValueA: value,
      })
      if (this.state.from == 'KM' && this.state.to == 'CM') {
        this.setState({
          ValueB: String((parseInt(value) * 100000).toFixed(2)),
        });
        console.log('KM TO CM')
      } else if (this.state.from == 'KM' && this.state.to == 'Mile') {
        this.setState({
          ValueB: String((parseInt(value) / 1.609).toFixed(2)),
        });
        console.log('KM TO Mile')
      } else if (this.state.from == 'KM' && this.state.to == 'Meter') {
        this.setState({
          ValueB: String((parseInt(value) * 1000).toFixed(2)),
        });
        console.log('KM TO Meter')
      } else if (this.state.from == 'CM' && this.state.to == 'KM') {
        this.setState({
          ValueB: String((parseInt(value) / 100000).toFixed(2)),
        });
        console.log('CM TO KM')
      } else if (this.state.from == 'CM' && this.state.to == 'Mile') {
        this.setState({
          ValueB: String((parseInt(value) / 160934).toFixed(2)),
        });
        console.log('CM TO Mile')
      } else if (this.state.from == 'CM' && this.state.to == 'Meter') {
        this.setState({
          ValueB: String((parseInt(value) / 100).toFixed(2)),
        });
        console.log('CM TO Meter')
      } else if (this.state.from == 'Mile' && this.state.to == 'KM') {
        this.setState({
          ValueB: String((parseInt(value) * 1.60).toFixed(2)),
        });
        console.log('Mile TO KM')
      } else if (this.state.from == 'Mile' && this.state.to == 'CM') {
        this.setState({
          ValueB: String((parseInt(value) * 160934).toFixed(2)),
        });
        console.log('Mile TO CM')
      } else if (this.state.from == 'Mile' && this.state.to == 'Meter') {
        this.setState({
          ValueB: String((parseInt(value) * 1609).toFixed(2)),
        });
        console.log('Mile TO Meter')
      } else if (this.state.from == 'Meter' && this.state.to == 'KM') {
        this.setState({
          ValueB: String((parseInt(value) / 1000).toFixed(2)),
        });
        console.log('Meter TO KM')
      } else if (this.state.from == 'Meter' && this.state.to == 'CM') {
        this.setState({
          ValueB: String((parseInt(value) * 100).toFixed(2)),
        });
        console.log('Meter TO CM')
      } else if (this.state.from == 'Meter' && this.state.to == 'Mile') {
        this.setState({
          ValueB: String((parseInt(value) / 1609).toFixed(2)),
        });
        console.log('Meter TO Mile')
      } else if (this.state.from == 'Meter' && this.state.to == 'Meter') {
        this.setState({
          ValueB: value,
        });
        console.log('Meter TO Meter')
      } else if (this.state.from == 'Mile' && this.state.to == 'Mile') {
        this.setState({
          ValueB: value,
        });
        console.log('Mile TO Mile')
      } else if (this.state.from == 'KM' && this.state.to == 'KM') {
        this.setState({
          ValueB: value,
        });
        console.log('KM TO KM')
      } else if (this.state.from == 'CM' && this.state.to == 'CM') {
        this.setState({
          ValueB: value,
        });
        console.log('CM TO CM')
      }
    }
  }
  // =========================================================================


  // ================Select different conversion options=======================

  valuePicker(itemValue, pickerNO) {
    if (pickerNO == 'picker1') {
      this.setState({
        from: itemValue,
        ValueA: '',
        ValueB: '',
      })
    } else if (pickerNO == 'picker2') {
      this.setState({
        to: itemValue,
        ValueA: '',
        ValueB: '',
      })
    }
  }
  //   =================================================

  // =============To Navigate================

  navigator(value) {
    console.log("Hello navigation")
    this.props.navigation.navigate(value);

  }
  //   ====================================================


  // =====================To reset Values ==============
  clear = () => {
    this.setState({
      ValueA: '',
      ValueB: '',
    })
  }

  //   =============================
  render() {
    return (
      <ScrollView>
        <View style={globalStyle.container}>
          <View style={globalStyle.headContainer}>
            <View style={globalStyle.headTextContainer}>
              {/* Navigate Different Pages */}
              <Picker
                selectedValue={this.state.navName}
                style={globalStyle.pickerHeader}
                onValueChange={(value) => this.navigator(value)}
              >
                <Picker.Item label="Distance Converter" value="Distance" />
                <Picker.Item label="Currency Converter" value="Currency" />
                <Picker.Item label="Weight Converter" value="Weight" />
                <Picker.Item label="Temperature Converter" value="Temperature" />
                <Picker.Item label="Speed Converter" value="Speed" />
                <Picker.Item label="Volume Converter" value="Volume" />
                <Picker.Item label="Age Checker" value="Age" />
              </Picker>
            </View>
          </View>

          {/* Exchange Image==== */}
          <View style={globalStyle.conversionContainer}>
            <View style={globalStyle.imageConatiner}>
              <Image
                style={globalStyle.currencyImage}
                source={{ uri: this.state.exchangeImage }} />
            </View>

            {/* Select Different Conversion Options */}
            <View style={globalStyle.dropDownContainer}>
              <Picker
                selectedValue={this.state.from}
                style={globalStyle.picker}
                onValueChange={(itemValue) => this.valuePicker(itemValue, 'picker1')}
              >
                <Picker.Item label="KM" value="KM" />
                <Picker.Item label="Mile" value="Mile" />
                <Picker.Item label="CM" value="CM" />
                <Picker.Item label="Meter" value="Meter" />
              </Picker>
              <Picker
                selectedValue={this.state.to}
                style={globalStyle.picker}
                onValueChange={(itemValue) => this.valuePicker(itemValue, 'picker2')}
              >
                <Picker.Item label="KM" value="KM" />
                <Picker.Item label="Mile" value="Mile" />
                <Picker.Item label="CM" value="CM" />
                <Picker.Item label="Meter" value="Meter" />
              </Picker>
            </View>

            {/* Accept input for conversion */}
            <View style={globalStyle.inputBoxContainer}>
              <View style={globalStyle.currencyValueContainer}>
                <Text style={globalStyle.CurrencyValue}>
                  {this.state.from}
                </Text>
              </View>
              <TextInput
                style={globalStyle.inputBox}
                placeholder={'Enter Value'}
                keyboardType={'numeric'}
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

            {/* To Clear the Inputs */}
            <TouchableOpacity
              onPress={this.clear}>
              <View style={globalStyle.inputBoxContainer}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4878db', '#3b5998', '#192f6a']} style={globalStyle.button}>
                  <Text style={globalStyle.btnText}>
                    Clear
                                    </Text>
                </LinearGradient>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}


