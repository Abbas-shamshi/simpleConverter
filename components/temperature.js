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
    // ================To Navigate=======================

    navigator(value) {
        console.log("Hello navigation")
        this.props.navigation.navigate(value);

    }
    //   ==================================================


    // =====================To reset Values ===============
    clear = () => {
        this.setState({
            ValueA: '',
            ValueB: '',
        })
    }
    // =====================================================

    // ============Select different conversion options=======

    valuePicker(itemValue, pickerNO) {
        if (pickerNO == 'picker1') {
            this.setState({
                from: itemValue,
                ValueA: '0',
                ValueB: '0',
            })
        } else if (pickerNO == 'picker2') {
            this.setState({
                to: itemValue,
                ValueA: '0',
                ValueB: '0',
            })
        }
    }
    //   =============================================================

    //==============Identify Which conversion to Calcualate============
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
                    ValueB: String(((parseInt(value) * (9 / 5) + 32)).toFixed(2)),
                });
                console.log('Celsius TO Frhn')
            } else if (this.state.from == 'Kelvin' && this.state.to == 'Celsius') {
                this.setState({
                    ValueB: String((parseInt(value) - 273.15).toFixed(2)),
                });
                console.log('Kelvin TO Celsius')
            } else if (this.state.from == 'Kelvin' && this.state.to == 'Frhn') {
                this.setState({
                    ValueB: String(((parseInt(value) - 273.15) * (9 / 5) + 32).toFixed(2)),
                });
                console.log('Kelvin TO Frhn')
            } else if (this.state.from == 'Frhn' && this.state.to == 'Celsius') {
                this.setState({
                    ValueB: String(((parseInt(value) - 32) * (5 / 9)).toFixed(2)),
                });
                console.log('Frhn TO Celsius')
            } else if (this.state.from == 'Frhn' && this.state.to == 'Kelvin') {
                this.setState({
                    ValueB: String(((parseInt(value) - 32) * (5 / 9) + 273.15).toFixed(2)),
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

        }
    }
    //   =============================================================


    render() {
        return (
            <ScrollView>
                <View style={globalStyle.container}>
                    <View style={globalStyle.headContainer}>
                        <View style={globalStyle.headTextContainer}>

                            {/* Navigate Different Pages */}
                            <Picker
                                style={globalStyle.pickerHeader}
                                onValueChange={(value) => this.navigator(value)}
                            >
                                <Picker.Item label="Temperature Converter" value="Temperature" />
                                <Picker.Item label="Currency Converter" value="Currency" />
                                <Picker.Item label="Distance Converter" value="Distance" />
                                <Picker.Item label="Weight Converter" value="Weight" />
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
                                <Picker.Item label="Celsius" value="Celsius" />
                                <Picker.Item label="Kelvin" value="Kelvin" />
                                <Picker.Item label="Fahrenheit " value="Frhn" />
                            </Picker>
                            <Picker
                                selectedValue={this.state.to}
                                style={globalStyle.picker}
                                onValueChange={(itemValue) => this.valuePicker(itemValue, 'picker2')}
                            >
                                <Picker.Item label="Celsius" value="Celsius" />
                                <Picker.Item label="Kelvin" value="Kelvin" />
                                <Picker.Item label="Fahrenheit " value="Frhn" />
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
