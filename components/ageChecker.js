import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Alert,
    Dimensions,
    ScrollView,
    TextInput,
    Picker,

} from 'react-native';
import globalStyle from '../style';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class ageChecker extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        year:undefined,
        month:undefined,
        day:undefined,
        message: undefined,
        
    };


    navigator(value) {
        console.log("Hello navigation")
        this.props.navigation.navigate(value)

    }
    Calculate = () => {
        var year = new Date().getFullYear();
        var month = new Date().getMonth() + 1;
        var day = new Date().getDate();
        var yearDiff = year - (parseInt(this.state.year));
        var monthDiff = month - (parseInt(this.state.month));
        var dayDiff = day - (parseInt(this.state.day));
        if (!this.state.year & !this.state.month & !this.state.day){
            Alert.alert(
                'Please Enter Year and Month!',
            );

        }else if(!this.state.year){
            Alert.alert(
                'Please Enter Year !',
            );
        }else if (this.state.year & this.state.month & this.state.day){
            this.setState({
                message:"You are "+ dayDiff + " days " + monthDiff + " months and " + yearDiff + " years old",
            })
            console.log("You are "+ dayDiff + " days " + monthDiff + " months and " + yearDiff + " years old")
        }else if(this.state.month & this.state.year){
            this.setState({
                message:"You are " + monthDiff + " months and " + yearDiff + " years old",
            })
            console.log("You are " + monthDiff + " months and " + yearDiff + " years old")
        }else if ( this.state.year){
            this.setState({
                message:"You are "  + yearDiff + " years old",
            })
            console.log("You are "  + yearDiff + " years old")

        }


        /* var msDiff = new Date("March 03, 2021").getTime() - new Date().getTime();    //Future date - current date
        var daysTill30June2035 = Math.floor(msDiff / (1000 * 60 * 60 * 24));
        console.log(daysTill30June2035); */

    }
     
    render() {
        return (
            <ScrollView>
                <View style={globalStyle.container}>
                    <View style={globalStyle.headContainer}>
                        <View style={globalStyle.headTextContainer}>
                            <Picker
                                style={globalStyle.pickerHeader}
                                onValueChange={(value) => this.navigator(value)}
                            >
                                <Picker.Item label="Volume Converter" value="Volume" />
                                <Picker.Item label="Speed Converter" value="Speed" />
                                <Picker.Item label="Distance Converter" value="Distance" />
                                <Picker.Item label="Currency Converter" value="Currency" />
                                <Picker.Item label="Temperature Converter" value="Temperature" />
                                <Picker.Item label="Weight Converter" value="Weight" />

                            </Picker>
                        </View>
                    </View>


                    <View style={globalStyle.ageConversionContainer}>
                        <View style={globalStyle.resultContainer}>
                            <Text style={globalStyle.resultText}>
                                {this.state.message}
                            </Text>
                        </View>

                        <View style={globalStyle.ageInputBoxContainer}>
                            <TextInput
                                style={globalStyle.ageInputBox}
                                placeholder={'Day'}

                                keyboardType={'numeric'}
                                onChangeText={(value) => this.setState({day:value})}
                            />
                            <TextInput
                                style={globalStyle.ageInputBox}
                                placeholder={'Month'}

                                keyboardType={'numeric'}
                                onChangeText={(value) => this.setState({month:value})}
                            />
                            <TextInput
                                style={globalStyle.ageInputBox}
                                placeholder={'Year'}

                                keyboardType={'numeric'}
                                onChangeText={(value) => this.setState({year:value})}
                            />
                        </View>


                        <TouchableOpacity
                            onPress={this.Calculate}>
                            <View style={globalStyle.inputBoxContainer}>
                                <View style={globalStyle.button} >
                                    <Text style={globalStyle.btnText}>
                                        Calculate
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
