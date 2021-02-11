import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
} from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-community/picker';
import LinearGradient from 'react-native-linear-gradient';
import globalStyle from '../style'

export default class Currency extends Component {
    constructor(props) {
        super(props);
    }
    state = {

        ValueA: '',
        ValueB: '',
        from: 'USD',
        to: 'INR',
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

    // ======= Set and calculate values (option 1) =========

    converterA = (value) => {
        this.setState({
            ValueA: value,
        })
        axios
            .get(`http://api.openrates.io/latest?base=${this.state.from}&symbols=${this.state.to}`)
            .then(response => {
                this.setState({
                    ValueB: String((parseInt(value) * parseFloat(response.data.rates[this.state.to])).toFixed(2)),
                })
            })
            .catch(error => {
                console.log("opps", error.message);
            })
    };
    // =====================================================

    // ======= Set and calculate values (option 2) =========

    converterB(value) {
        this.setState({
            ValueB: value,
        })
        axios
            .get(`http://api.openrates.io/latest?base=${this.state.to}&symbols=${this.state.from}`)
            .then(response => {
                this.setState({
                    ValueA: String((parseInt(value) * parseFloat(response.data.rates[this.state.from])).toFixed(2)),
                })
            })
            .catch(error => {
                console.log("opps", error.message);
            })
    }
    // =====================================================

    render() {
        return (
            <ScrollView>
                <View style={globalStyle.container}>
                    <View style={globalStyle.headContainer}>
                        <View style={globalStyle.headTextContainer}>

                            {/* Navigate Different Pages */}
                            <Picker
                                selectedValue={this.state.fromCurrency}
                                style={globalStyle.pickerHeader}
                                onValueChange={(value) => this.navigator(value)}
                            >
                                <Picker.Item label="Currency Converter" value="Currency" />
                                <Picker.Item label="Distance Converter" value="Distance" />
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
                                onValueChange={(itemValue) => this.setState({ from: itemValue })}
                            >
                                <Picker.Item label="USD Dollar" value="USD" />
                                <Picker.Item label="Indian Rupee" value="INR" />
                                <Picker.Item label="Euro" value="EUR" />
                                <Picker.Item label="Austrailan Dollar" value="AUD" />
                                <Picker.Item label="Canadian Dollar" value="CAD" />
                                <Picker.Item label="Japanese Yen" value="JPY" />
                                <Picker.Item label="New Zeland Dollar" value="NZD" />
                                <Picker.Item label="Russian Ruble" value="RUB" />
                                <Picker.Item label="Honk Kong Dollar" value="HKD" />
                            </Picker>
                            <Picker
                                selectedValue={this.state.to}
                                style={globalStyle.picker}
                                onValueChange={(itemValue) => this.setState({ to: itemValue })}
                            >
                                <Picker.Item label="USD Dollar" value="USD" />
                                <Picker.Item label="Indian Rupee" value="INR" />
                                <Picker.Item label="Euro" value="EUR" />
                                <Picker.Item label="Austrailan Dollar" value="AUD" />
                                <Picker.Item label="Canadian Dollar" value="CAD" />
                                <Picker.Item label="Japanese Yen" value="JPY" />
                                <Picker.Item label="New Zeland Dollar" value="NZD" />
                                <Picker.Item label="Russian Ruble" value="RUB" />
                                <Picker.Item label="Honk Kong Dollar" value="HKD" />
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
                                onChangeText={this.converterA}
                            />
                        </View>

                        {/* Accept input for conversion */}
                        <View style={globalStyle.inputBoxContainer}>
                            <View style={globalStyle.currencyValueContainer}>
                                <Text style={globalStyle.CurrencyValue}>
                                    {this.state.to}
                                </Text>
                            </View>
                            <TextInput
                                style={globalStyle.inputBox}
                                placeholder={'Enter Value'}
                                keyboardType={'numeric'}
                                value={this.state.ValueB}
                                onChangeText={(value) => this.converterB(value)}
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


