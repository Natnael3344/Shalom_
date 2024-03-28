import React from 'react';
import { connect, useSelector } from 'react-redux';
import {Image, View, Text, Alert,TouchableOpacity} from 'react-native';

import DrawerFooterStyle from './DrawerFooterStyle';
import { DrawerActions } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import { loginActions } from '../auth/login/Login.actons';

const DrawerFooter = props => {
  
  return (
    <View style={DrawerFooterStyle.component}>
      <View style={{paddingHorizontal: 20}}>
        <CustomButton
          text={'Logout'}
          onPress={() =>
            Alert.alert(
              "Logout",
              "Do you want to logout?",
              [
                {
                  text: "Cancel",
                  onPress: () => {
                    props.navigation.dispatch(DrawerActions.closeDrawer());
                  },
                },
                {
                  text: "Confirm",
                  onPress: () => props.logoutUser(),
                },
              ],
              {cancelable: false},
            )
          }
        />
      </View>
      <Text style={DrawerFooterStyle.RightsTextStyle}>
      © NT.
      </Text>
    </View>
  );
};



const mapStateToPros = (state) => {
  return ({ 
      user : state.login.user,
      loading : state.login.loading 
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
      logoutUser: (values) => dispatch(loginActions.logout()),
  }
}

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(DrawerFooter)
