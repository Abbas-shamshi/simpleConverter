import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import globalStyle from './style'

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    icon: 'https://cdn.pixabay.com/photo/2018/02/27/01/53/gene-function-3184518_960_720.png'
  };

  _handleTextChange = (inputValue) => {
    this.setState({ inputValue });
  };

  navigator(value) {
    console.log("Hello navigation");
    this.props.navigation.navigate(value);

  }
  render() {
    return (
      <ScrollView>

        <View style={styles.container}>

          {/* Heading */}
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4878db', '#3b5998', '#192f6a']} style={globalStyle.headContainer}>
            <Image
              style={globalStyle.logo}
              source={{ uri: this.state.icon }} />
            <Text style={globalStyle.headText}>Simple App</Text>
          </LinearGradient>

          <View style={globalStyle.flexContainer}>
            {/* Distance Button Layout */}
            <TouchableOpacity onPress={() => this.navigator('Currency')}>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4878db', '#3b5998', '#192f6a']} style={globalStyle.buttonContainer}>
                <Text style={globalStyle.buttonText}>Currency</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Weight Button Layout */}
            <TouchableOpacity onPress={() => this.navigator('Distance')}>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4878db', '#3b5998', '#192f6a']} style={globalStyle.buttonContainer}>
                <Text style={globalStyle.buttonText}>Distance</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={globalStyle.flexContainer}>

            {/* Weight Button Layout */}
            <TouchableOpacity onPress={() => this.navigator('Weight')}>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4878db', '#3b5998', '#192f6a']} style={globalStyle.buttonContainer}>
                <Text style={globalStyle.buttonText}>Weight</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Temperature Button Layout */}
            <TouchableOpacity onPress={() => this.navigator('Temperature')}>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4878db', '#3b5998', '#192f6a']} style={globalStyle.buttonContainer}>
                <Text style={globalStyle.buttonText}>Temperature</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={globalStyle.flexContainer}>

            {/* Speed Button Layout */}
            <TouchableOpacity onPress={() => this.navigator('Speed')}>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4878db', '#3b5998', '#192f6a']} style={globalStyle.buttonContainer}>
                <Text style={globalStyle.buttonText}>Speed</Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* Volume Button */}
            <TouchableOpacity onPress={() => this.navigator('Volume')}>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4878db', '#3b5998', '#192f6a']} style={globalStyle.buttonContainer}>
                <Text style={globalStyle.buttonText}>Volume</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={globalStyle.flexContainer}>

            {/* Age Checker Button Layout */}
            <TouchableOpacity onPress={() => this.navigator('Age')}>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4878db', '#3b5998', '#192f6a']} style={globalStyle.buttonContainer}>
                <Text style={globalStyle.buttonText}>Age Checker</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View >
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },


  conversionHeadContainer: {
    marginHorizontal: 'auto',
    marginTop: 30,
    alignItems: 'center',
  },
  conversionHeadText: {
    fontSize: deviceHeight / 20,
    fontWeight: 'bold',
    color: '#76b852',
  },
  inputBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  inputBox: {
    backgroundColor: 'grey',
    width: (1.4 * deviceWidth) / 4,
    height: deviceHeight / 10,
    borderRadius: 10,
    fontSize: deviceHeight / 25,
    color: 'black',

    textAlign: 'center',
  },
  conversionContainer: {
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderColor: '#76b852',
  },
  backButtonContainer: {
    backgroundColor: 'white',
    width: (1.2 * deviceWidth) / 6,
    height: deviceHeight / 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  backButtonText: {
    fontSize: deviceHeight / 24,
  },
});
