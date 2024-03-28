import { StyleSheet } from "react-native";

const DrawerFooterStyle = StyleSheet.create({
    component: {
      justifyContent: "center",
      paddingTop: 5,
    },
    ButtonStyle: {
      marginLeft: 20,
      marginRight: 20,
      height: 45,
      flexDirection: "row",
      borderRadius: 4,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'yellow',
    },
    imageStyle: {
      marginLeft: 5,
    },
    LogoutTextStyle: {
      marginLeft: 10,
      marginRight: 20,
      color: 'white',
      fontSize: 12,
    //  fontFamily: FONT.FONT_FAMILY_PROXIMA_NOVA_REGULAR,
      textAlign: "center",
    },
    LastLoginTextstyle: {
      marginTop: 15,
      textAlign: "center",
      color: 'grey',
    },
    separatorView: {
      width: "100%",
      height: 1,
      marginTop: 10,
      backgroundColor: 'grey',
      opacity: 0.3,
    },
    RightsTextStyle: {
      width: "100%",
      marginTop: 10,
      marginBottom: 10,
      color: 'gray',
      fontSize: 12,
  //    fontFamily: FONT.FONT_FAMILY_PROXIMA_NOVA_REGULAR,
      textAlign: "center",
    },
    gradientBtn: {
      paddingVertical: 4,
      marginHorizontal: 20,
    },
  });

  export default DrawerFooterStyle;