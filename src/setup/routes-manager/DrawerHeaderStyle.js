import { StyleSheet } from "react-native";
import { COLOR } from "../../assets/constants/GlobalConstants";

export default StyleSheet.create({
    imageContainer: {
      height: 100,
      justifyContent: "center",
      alignItems: "center",
      paddingTop:15,
      // backgroundColor : COLOR.BACKGROUND_COLOR
    },
    imageStyle: {
      width: 100,
      height: 40,
    },
    detailsContainer: {
      paddingBottom: 11,
      borderWidth: 1,
      borderColor: COLOR.BACKGROUND_COLOR,
      backgroundColor: COLOR.BACKGROUND_COLOR,
      justifyContent: "center",
      alignItems: "center",
    },
    nameTextStyle: {
      marginLeft: 20.5,
      marginTop: 9,
      color: 'white',
     // fontSize: '12',
      fontWeight: "bold",
      // fontFamily: '',
    },
    textStyle: {
      // height: 16,
      marginLeft: 20.5,
      marginTop: 5,
      color: 'blue',
      fontSize: '12',
      // fontFamily: FONT.FONT_FAMILY_PROXIMA_NOVA_REGULAR,
    },
  });