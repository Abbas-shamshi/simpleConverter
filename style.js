import {StyleSheet} from 'react-native';
import {
	Dimensions,
  } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
	backgroundColor: '#00C6FF'
   },

 

  buttonMain: {
	flexDirection: "row",
	justifyContent: "space-around",
	alignItems: "center",
	margin : "auto"
  },


  buttonInContainer: {
    alignItems: 'center',
	
  },container: {
    flex: 1,
  },

  safeArea: {
	backgroundColor: '#00C6FF'
   },

   headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: deviceWidth,
    height: deviceHeight / 10,
    backgroundColor: '#2f6e20',
},
headTextContainer: {
    fontSize: deviceHeight / 21,
    color: 'white',
},
headText: {
    fontSize: deviceHeight / 21,
    color: 'white',
},
buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
},
button: {
    height: deviceHeight / 14,
    width: (3 * deviceWidth) / 8,
    backgroundColor: '#2f6e20',

    borderRadius: 5,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
},
buttonText: {
    fontSize: deviceHeight / 22
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
    color: 'black',
fontSize:deviceHeight/30,
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
    height: deviceHeight / 16,
    width: (3 * deviceWidth) / 8,
    transform: [
        { scaleX: 1 },
        { scaleY: 1 },
    ]
},
CurrencyValue: {
    fontSize: deviceHeight / 38,
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
    width: (3 * deviceWidth) / 8,
    height: (3 * deviceWidth) / 8,
},
pickerHeader: {
    height: deviceHeight / 16,
    width: (2 * deviceWidth) / 3,
    transform: [
        { scaleX: 1.2},
        { scaleY: 1.2 },
    ],
    color: 'white',

},
btnText: {
    color: 'white',
    fontSize:deviceHeight/38,
}
});