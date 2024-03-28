import { loginService } from './Login.services';
import { stopSubmit } from 'redux-form';
import { SuccesToaster, ErrorToaster } from '../../helpers';
import { CommonActionsCreator } from '../../../actions/CommonActionCreators';
import * as RootNavigation from '../../routes-manager/RootNavigation'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeData } from '../../../api/asyncStorage';
export const loginConstants = {
  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
  SET_LOADING : 'SET_LOADING',
  CLEAR_LOADING : 'CLEAR_LOADING',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
};

export const loginActions = {
  login,
  // loginWithPassword,
  logout,
  socialLogin,
};



function login(number) {
  
  return (dispatch) => {
    dispatch(CommonActionsCreator.fetching(loginConstants.SET_LOADING));
    dispatch(CommonActionsCreator.fetching(loginConstants.LOGIN_REQUEST));
    loginService.login(number)
      .then(
        user => {
          dispatch(CommonActionsCreator.fetching(loginConstants.CLEAR_LOADING));
          if (user.login === true) {
            dispatch(CommonActionsCreator.success(loginConstants.LOGIN_SUCCESS, user));
            const successMessage = user.message;
            const param = {};
            console.log('test');
            storeData("token_value",user);
           storeData("login_data",user, true);
            RootNavigation.navigate("home");
            SuccesToaster(param, 'Welcome to My Ambar!');
          } else {
            dispatch(CommonActionsCreator.error(loginConstants.LOGIN_FAILURE, user));

            let msg = '';
            if (typeof user.message !== 'undefined') {
              msg = user.message;
            } else {
              msg = user.message;
            }

            const validationErrors = { user_name: msg };
            dispatch(stopSubmit('LoginWithPassword', validationErrors));
          }
        },
        error => {
          dispatch(CommonActionsCreator.fetching(loginConstants.CLEAR_LOADING));
          ErrorToaster(" Alert ", "Something went wrong !!!");
        }
      );
  };
}
function logout(data) {
  return dispatch => {
    console.log('---come here---');
    AsyncStorage.clear();
  //  NavigationService.navigate('Login');
    dispatch(CommonActionsCreator.success(loginConstants.LOGOUT_SUCCESS));
  };

}
function socialLogin(socialData, registerData) {
  return (dispatch) => {
    dispatch(CommonActionsCreator.fetching(loginConstants.LOGIN_REQUEST));
    loginService.socialLogin(socialData)
      .then(
        user => {
          if (user.data.status === "success") {
            dispatch(CommonActionsCreator.success(loginConstants.LOGIN_SUCCESS, user));
            if (user.data.is_register == 0) {
              RootNavigation.navigate("Register", registerData);
            } else {
              dispatch(CommonActionsCreator.success(OTPConstants.OTP_SUCCESS, user));
              const successMessage = user.message;
              const param = {};
              RootNavigation.navigate("Home");
              SuccesToaster(param, 'Welcome to My Wickets!');
            }
          } else {
            dispatch(CommonActionsCreator.error(loginConstants.LOGIN_FAILURE, user));
          }
        },
        error => {
          ErrorToaster(" Alert ", "Something went wrong !!!");
        }
      );
  };
}
