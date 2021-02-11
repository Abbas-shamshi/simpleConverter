import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Alert,
    ScrollView,
    TextInput,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import globalStyle from '../style';
import LinearGradient from 'react-native-linear-gradient';

export default class AgeChecker extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        year: undefined,
        month: undefined,
        day: undefined,
        message: "Your Age is",

    };

    // ================To Navigate=======================

    navigator(value) {
        console.log("Hello navigation")
        this.props.navigation.navigate(value);

    }

    //   ==================================================


    //====================Calcuate Age======================


    Calculate = () => {

        if (!this.state.year && !this.state.month && !this.state.year) {
            Alert.alert(
                'Please Enter Year, Month and Day of Birth!',
            );
        } else if (!this.state.year || !this.state.month || !this.state.year) {
            Alert.alert(
                'Please Enter all the details!',
            );
        } else {
            var now = new Date();
            var today = new Date(now.getYear(), now.getMonth(), now.getDate());
            var yearNow = now.getYear();
            var monthNow = now.getMonth() + 1;
            var dateNow = now.getDate();

            var dob = new Date(this.state.year, this.state.month, this.state.day);
            var yearDob = dob.getYear();
            var monthDob = dob.getMonth();
            var dateDob = dob.getDate();
            var age = {};
            var ageString = "";
            var yearString = "";
            var monthString = "";
            var dayString = "";
            yearAge = yearNow - yearDob;

            if (monthNow >= monthDob)
                var monthAge = monthNow - monthDob;
            else {
                yearAge--;
                var monthAge = 12 + monthNow - monthDob;
            }

            if (dateNow >= dateDob)
                var dateAge = dateNow - dateDob;
            else {
                monthAge--;
                var dateAge = 31 + dateNow - dateDob;

                if (monthAge < 0) {
                    monthAge = 11;
                    yearAge--;
                }
            }

            age = {
                years: yearAge,
                months: monthAge,
                days: dateAge
            };

            if (age.years > 1) yearString = " years";
            else yearString = " year";
            if (age.months > 1) monthString = " months";
            else monthString = " month";
            if (age.days > 1) dayString = " days";
            else dayString = " day";


            if ((age.years > 0) && (age.months > 0) && (age.days > 0))
                ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
            else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
                ageString = "Only " + age.days + dayString + " old!";
            else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
                ageString = age.years + yearString + " old. Happy Birthday!!";
            else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
                ageString = age.years + yearString + " and " + age.months + monthString + " old.";
            else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
                ageString = age.months + monthString + " and " + age.days + dayString + " old.";
            else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
                ageString = age.years + yearString + " and " + age.days + dayString + " old.";
            else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
                ageString = age.months + monthString + " old.";
            else ageString = "Oops! Could not calculate age!";


            this.setState({
                message: ageString,
            })
        }


    }

    // ====================================================================================


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
                                <Picker.Item label="Age Checker" value="Age" />
                                <Picker.Item label="Currency Converter" value="Currency" />
                                <Picker.Item label="Distance Converter" value="Distance" />
                                <Picker.Item label="Weight Converter" value="Weight" />
                                <Picker.Item label="Temperature Converter" value="Temperature" />
                                <Picker.Item label="Speed Converter" value="Speed" />
                                <Picker.Item label="Volume Converter" value="Volume" />
                            </Picker>
                        </View>
                    </View>

                    {/* To Print Date based on input date  */}
                    <View style={globalStyle.ageConversionContainer}>
                        <View style={globalStyle.resultContainer}>
                            <Text style={globalStyle.resultText}>
                                {this.state.message}
                            </Text>
                        </View>

                        {/* Accept input for the Date */}
                        <View style={globalStyle.ageInputBoxContainer}>
                            <TextInput
                                style={globalStyle.ageInputBox}
                                placeholder={'Day'}

                                keyboardType={'numeric'}
                                onChangeText={(value) => this.setState({ day: value })}
                            />
                            <TextInput
                                style={globalStyle.ageInputBox}
                                placeholder={'Month'}

                                keyboardType={'numeric'}
                                onChangeText={(value) => this.setState({ month: value })}
                            />
                            <TextInput
                                style={globalStyle.ageInputBox}
                                placeholder={'Year'}

                                keyboardType={'numeric'}
                                onChangeText={(value) => this.setState({ year: value })}
                            />
                        </View>

                        {/* Calcuate Button */}
                        <TouchableOpacity
                            onPress={this.Calculate}>
                            <View style={globalStyle.inputBoxContainer}>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4878db', '#3b5998', '#192f6a']} style={globalStyle.button}>
                                    <Text style={globalStyle.btnText}>
                                        Calculate
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
