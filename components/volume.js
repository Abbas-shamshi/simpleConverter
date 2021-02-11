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
import globalStyle from '../style';
import LinearGradient from 'react-native-linear-gradient';

export default class VolumeVC extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        ValueA: '',
        ValueB: '',
        from: 'Ltr',
        to: 'Gln',
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
    // ================================================================


    //==============Identify Which conversion to Calcualate============
    converter(value, input) {
        console.log(input);
        if (input == 'value1') {
            this.setState({
                ValueA: value,
            })
            if (this.state.from == 'Ltr' && this.state.to == 'Ml') {
                this.setState({
                    ValueB: String((parseInt(value) * 1000).toFixed(2)),
                });
                console.log('Ltr TO Ml')
            } else if (this.state.from == 'Ltr' && this.state.to == 'Gln') {
                this.setState({
                    ValueB: String((parseInt(value) / 3.785).toFixed(2)),
                });
                console.log('Ltr TO Gln')
            } else if (this.state.from == 'Ltr' && this.state.to == 'Pint') {
                this.setState({
                    ValueB: String((parseInt(value) * 2.113).toFixed(2)),
                });
                console.log('Ltr TO Pint')
            } else if (this.state.from == 'Ml' && this.state.to == 'Ltr') {
                this.setState({
                    ValueB: String((parseInt(value) / 1000).toFixed(2)),
                });
                console.log('Ml TO Ltr')
            } else if (this.state.from == 'Ml' && this.state.to == 'Gln') {
                this.setState({
                    ValueB: String((parseInt(value) / 3785).toFixed(2)),
                });
                console.log('Ml TO Gln')
            } else if (this.state.from == 'Ml' && this.state.to == 'Pint') {
                this.setState({
                    ValueB: String((parseInt(value) / 473).toFixed(2)),
                });
                console.log('Ml TO Pint')
            } else if (this.state.from == 'Gln' && this.state.to == 'Ltr') {
                this.setState({
                    ValueB: String((parseInt(value) * 3.785).toFixed(2)),
                });
                console.log('Gln TO Ltr')
            } else if (this.state.from == 'Gln' && this.state.to == 'Ml') {
                this.setState({
                    ValueB: String((parseInt(value) * 3785).toFixed(2)),
                });
                console.log('Gln TO Ml')
            } else if (this.state.from == 'Gln' && this.state.to == 'Pint') {
                this.setState({
                    ValueB: String((parseInt(value) * 8).toFixed(2)),
                });
                console.log('Gln TO Pint')
            } else if (this.state.from == 'Pint' && this.state.to == 'Ltr') {
                this.setState({
                    ValueB: String((parseInt(value) / 2.113).toFixed(2)),
                });
                console.log('Pint TO Ltr')
            } else if (this.state.from == 'Pint' && this.state.to == 'Ml') {
                this.setState({
                    ValueB: String((parseInt(value) * 473).toFixed(2)),
                });
                console.log('Pint TO Ml')
            } else if (this.state.from == 'Pint' && this.state.to == 'Gln') {
                this.setState({
                    ValueB: String((parseInt(value) / 8).toFixed(2)),
                });
                console.log('Pint TO Gln')
            } else if (this.state.from == 'Pint' && this.state.to == 'Pint') {
                this.setState({
                    ValueB: value,
                });
                console.log('Pint TO Pint')
            } else if (this.state.from == 'Gln' && this.state.to == 'Gln') {
                this.setState({
                    ValueB: value,
                });
                console.log('Gln TO Gln')
            } else if (this.state.from == 'Ltr' && this.state.to == 'Ltr') {
                this.setState({
                    ValueB: value,
                });
                console.log('Ltr TO Ltr')
            } else if (this.state.from == 'Ml' && this.state.to == 'Ml') {
                this.setState({
                    ValueB: value,
                });
                console.log('Ml TO Ml')
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
                                <Picker.Item label="Volume Converter" value="Volume" />
                                <Picker.Item label="Currency Converter" value="Currency" />
                                <Picker.Item label="Distance Converter" value="Distance" />
                                <Picker.Item label="Weight Converter" value="Weight" />
                                <Picker.Item label="Temperature Converter" value="Temperature" />
                                <Picker.Item label="Speed Converter" value="Speed" />
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
                                <Picker.Item label="Liter" value="Ltr" />
                                <Picker.Item label="Milliliter" value="Ml" />
                                <Picker.Item label="Gallon" value="Gln" />
                                <Picker.Item label="Pint" value="Pint" />
                            </Picker>
                            <Picker
                                selectedValue={this.state.to}
                                style={globalStyle.picker}
                                onValueChange={(itemValue) => this.valuePicker(itemValue, 'picker2')}
                            >
                                <Picker.Item label="Gallon" value="Gln" />
                                <Picker.Item label="Liter" value="Ltr" />
                                <Picker.Item label="Milliliter" value="Ml" />
                                <Picker.Item label="Pint" value="Pint" />
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
