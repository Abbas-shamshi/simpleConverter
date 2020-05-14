import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
    ImageBackground,
    Alert,
    Dimensions,
    SafeAreaView,
    ScrollView,
    TextInput,
    Picker,
} from 'react-native';
import axios from 'axios';
// import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class Currency extends Component {
    state = {
        homeDisplay: 'flex',
        distanceDisplay: 'none',
        weightDisplay: 'none',
        measureDisplay: 'none',
        ValueA: '0',
        ValueB: '0',
        fromCurrency: 'USD',
        toCurrency: 'INR',
        name: 'abbas',
        exchangeImage: 'https://newtonfoxbds.com/wp-content/uploads/2017/01/Two_way-data-exchange.gif',
    };

    //   Other conversion functions
    converterA = (value) => {
        this.setState({
            ValueA: value,
        })
        axios
            .get(`http://api.openrates.io/latest?base=${this.state.fromCurrency}&symbols=${this.state.toCurrency}`)
            .then(response => {
                this.setState({

                    ValueB: String((parseInt(value) * parseFloat(response.data.rates[this.state.toCurrency])).toFixed(2)),
                })

            })
            .catch(error => {
                console.log("opps", error.message);
            })

        // axios
        /*    .get(
               `http://api.openrates.io/latest?base=${
               this.state.fromCurrency
               }&symbols=${this.state.toCurrency}`
           ) */
        /* axios
            .get(
                `http://api.openrates.io/latest?base=USD&symbols=INR`)
            .then(response => {
                this.setState({
                    ValueA: ValueA,
                    ValueB: String(parseInt(valueA) * response.data.rates['INR'].toFixed(3)),


                })
                console.log(response.data.rates['INR']);
                console.log("current Value of b")
                console.log(this.state.ValueB);
            })
            .catch(error => {
                console.log("Opps", error.message);
            }) */;

    };
    converterB = (value) => {
        this.setState({
            ValueB: value,
        })
        axios
            .get(`http://api.openrates.io/latest?base=${this.state.toCurrency}&symbols=${this.state.fromCurrency}`)
            .then(response => {
                this.setState({

                    ValueA: String((parseInt(value) * parseFloat(response.data.rates[this.state.fromCurrency])).toFixed(2)),
                })

            })
            .catch(error => {
                console.log("opps", error.message);
            })


    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headContainer}>
                    <View style={styles.headTextContainer}>
                        <Text style={styles.headText}>Currency Converter</Text>
                    </View>
                </View>


                <View style={styles.conversionContainer}>
                    <View style={styles.imageConatiner}>
                        <Image
                            style={styles.currencyImage}
                            source={{ uri: this.state.exchangeImage }} />

                    </View>

                    <View style={styles.dropDownContainer}>
                        <Picker
                            selectedValue={this.state.fromCurrency}
                            style={styles.picker}
                            onValueChange={(itemValue) => this.setState({ fromCurrency: itemValue })}
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
                            selectedValue={this.state.toCurrency}
                            style={styles.picker}
                            onValueChange={(itemValue) => this.setState({ toCurrency: itemValue })}
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

                    <View style={styles.inputBoxContainer}>
                        <View style={styles.currencyValueContainer}>
                            <Text style={styles.CurrencyValue}>
                                {this.state.fromCurrency}
                            </Text>
                        </View>
                        <TextInput
                            style={styles.inputBox}
                            keyboardType={'numeric'}
                            value={this.state.ValueA}
                            onChangeText={this.converterA}
                        />


                    </View>
                    <View style={styles.inputBoxContainer}>
                        <View style={styles.currencyValueContainer}>
                            <Text style={styles.CurrencyValue}>
                                {this.state.toCurrency}
                            </Text>
                        </View>
                        <TextInput
                            style={styles.inputBox}
                            keyboardType={'numeric'}
                            value={this.state.ValueB}
                            onChangeText={this.converterB}
                        />


                    </View>


                    {/*  <TextInput
                            style={styles.inputBox}
                            value={this.state.ValueB}
                            keyboardType={'number-pad'}
                            onChangeText={this.converterB}
                        />
                        <Text style={styles.CurrencyValue}>
                            {this.state.toCurrency}

                        </Text> */}


                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    headContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: deviceWidth,
        height: deviceHeight / 10,
        backgroundColor: 'blue',
    },
    headTextContainer: {
        fontSize: deviceHeight / 21,
        color: 'white',
    },
    headText: {
        fontSize: deviceHeight / 21,
        color: 'white',
    },


    inputBoxContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    inputBox: {
        backgroundColor: 'lightgrey',
        width: (3 * deviceWidth) / 4,
        height: deviceHeight / 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,

        fontSize: deviceHeight / 25,
        color: 'black',

        textAlign: 'center',
    },
    conversionContainer: {
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderColor: 'blue',
        height: (9 * deviceHeight) / 10,
        marginTop: 10,
    },
    dropDownContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: deviceHeight / 18,
    },
    picker: {
        backgroundColor: 'lightgrey',
        height: deviceHeight / 16,
        width: (2 * deviceWidth) / 6,
        transform: [
            { scaleX: 1.2 },
            { scaleY: 1.2 },
        ]
    },
    CurrencyValue: {
        fontSize: deviceHeight / 30,
        padding: 10,

    },
    currencyValueContainer: {
        justifyContent: "center",
        alignItems: 'center',
        height: deviceHeight / 10,
        backgroundColor: 'lightgrey',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderRightWidth: 1
    },
    imageConatiner: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    currencyImage: {
        width: (2 * deviceWidth) / 4,
        height: (2 * deviceWidth) / 4
    },


});
