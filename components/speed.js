import React, { Component } from 'react';
import {
    ScrollView,
    Image,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import globalStyle from '../style';
import LinearGradient from 'react-native-linear-gradient';

export default class SpeedVC extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        ValueA: '',
        ValueB: '',
        from: 'Mph',
        to: 'Knots',
        exchangeImage: 'https://newtonfoxbds.com/wp-content/uploads/2017/01/Two_way-data-exchange.gif',
        navName: "Speed"
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
    //   =============================================================



    //==============Identify Which conversion to Calcualate============

    converter(value, input) {
        console.log(input);
        if (input == 'value1') {
            this.setState({
                ValueA: value,
            })
            if (this.state.from == 'Mph' && this.state.to == 'Kph') {
                this.setState({
                    ValueB: String((parseInt(value) * 1.609).toFixed(2)),
                });
                console.log('Mph TO Kph')
            } else if (this.state.from == 'Mph' && this.state.to == 'Knots') {
                this.setState({
                    ValueB: String((parseInt(value) / 1.15).toFixed(2)),
                });
                console.log('Mph TO Knots')
            } else if (this.state.from == 'Mph' && this.state.to == 'MPS') {
                this.setState({
                    ValueB: String((parseInt(value) / 2.237).toFixed(2)),
                });
                console.log('Mph TO MPS')
            } else if (this.state.from == 'Kph' && this.state.to == 'Mph') {
                this.setState({
                    ValueB: String((parseInt(value) / 1.609).toFixed(2)),
                });
                console.log('Kph TO Mph')
            } else if (this.state.from == 'Kph' && this.state.to == 'Knots') {
                this.setState({
                    ValueB: String((parseInt(value) / 1.852).toFixed(2)),
                });
                console.log('Kph TO Knots')
            } else if (this.state.from == 'Kph' && this.state.to == 'MPS') {
                this.setState({
                    ValueB: String((parseInt(value) / 3.6).toFixed(2)),
                });
                console.log('Kph TO MPS')
            } else if (this.state.from == 'Knots' && this.state.to == 'Mph') {
                this.setState({
                    ValueB: String((parseInt(value) * 1.15).toFixed(2)),
                });
                console.log('Knots TO Mph')
            } else if (this.state.from == 'Knots' && this.state.to == 'Kph') {
                this.setState({
                    ValueB: String((parseInt(value) * 1.852).toFixed(2)),
                });
                console.log('Knots TO Kph')
            } else if (this.state.from == 'Knots' && this.state.to == 'MPS') {
                this.setState({
                    ValueB: String((parseInt(value) / 1.944).toFixed(2)),
                });
                console.log('Knots TO MPS')
            } else if (this.state.from == 'MPS' && this.state.to == 'Mph') {
                this.setState({
                    ValueB: String((parseInt(value) / 1000).toFixed(2)),
                });
                console.log('MPS TO Mph')
            } else if (this.state.from == 'MPS' && this.state.to == 'Kph') {
                this.setState({
                    ValueB: String((parseInt(value) * 100).toFixed(2)),
                });
                console.log('MPS TO Kph')
            } else if (this.state.from == 'MPS' && this.state.to == 'Knots') {
                this.setState({
                    ValueB: String((parseInt(value) / 1609).toFixed(2)),
                });
                console.log('MPS TO Knots')
            } else if (this.state.from == 'MPS' && this.state.to == 'MPS') {
                this.setState({
                    ValueB: value,
                });
                console.log('MPS TO MPS')
            } else if (this.state.from == 'Knots' && this.state.to == 'Knots') {
                this.setState({
                    ValueB: value,
                });
                console.log('Knots TO Knots')
            } else if (this.state.from == 'Mph' && this.state.to == 'Mph') {
                this.setState({
                    ValueB: value,
                });
                console.log('Mph TO Mph')
            } else if (this.state.from == 'Kph' && this.state.to == 'Kph') {
                this.setState({
                    ValueB: value,
                });
                console.log('Kph TO Kph')
            }
        }
    }
    //   =================================================================



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
                                <Picker.Item label="Speed Converter" value="Speed" />
                                <Picker.Item label="Currency Converter" value="Currency" />
                                <Picker.Item label="Distance Converter" value="Distance" />
                                <Picker.Item label="Weight Converter" value="Weight" />
                                <Picker.Item label="Temperature Converter" value="Temperature" />
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
                                <Picker.Item label="Mph" value="Mph" />
                                <Picker.Item label="Kph" value="Kph" />
                                <Picker.Item label="Knots" value="Knots" />
                                <Picker.Item label="MPS" value="MPS" />
                            </Picker>
                            <Picker
                                selectedValue={this.state.to}
                                style={globalStyle.picker}
                                onValueChange={(itemValue) => this.valuePicker(itemValue, 'picker2')}
                            >
                                <Picker.Item label="Mph" value="Mph" />
                                <Picker.Item label="Kph" value="Kph" />
                                <Picker.Item label="Knots" value="Knots" />
                                <Picker.Item label="MPS" value="MPS" />
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
