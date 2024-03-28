import { stopSubmit } from 'redux-form';
import * as RootNavigation from '../../routes-manager/RootNavigation'
import { useNavigation } from '@react-navigation/native';
import { CommonActionsCreator } from '../../../actions/CommonActionCreators';
import { drawerService } from './Drawer.services';
import { SuccesToaster } from '../../helpers';
export const drawerConstants = {
  DRAWER_REQUEST: 'USERS_DRAWER_REQUEST',
  DRAWER_SUCCESS: 'USERS_DRAWER_SUCCESS',
  DRAWER_FAILURE: 'USERS_DRAWER_FAILURE',
  SET_LOADING : 'SET_LOADING',
  CLEAR_LOADING : 'CLEAR_LOADING'
};

export const drawerActions = {
  drawer,
  // loginWithPassword,
};



function drawer(number) {
  
  return (dispatch) => {
    dispatch(CommonActionsCreator.fetching(drawerConstants.SET_LOADING));
    dispatch(CommonActionsCreator.fetching(drawerConstants.DRAWER_REQUEST));
    drawerService.drawer(number)
      .then(
        user => {
          dispatch(CommonActionsCreator.fetching(drawerConstants.CLEAR_LOADING));
          if (user.login === true) {
            dispatch(CommonActionsCreator.success(drawerConstants.DRAWER_SUCCESS, user));
            const successMessage = user.message;
            const param = {};
            console.log('test');
            RootNavigation.navigate("home");
            SuccesToaster(param, 'Welcome to My Ambar!');
          } else {
            dispatch(CommonActionsCreator.error(drawerConstants.DRAWER_FAILURE, user));

            
            
          }
        },
        error => {
          dispatch(CommonActionsCreator.fetching(loginConstants.CLEAR_LOADING));
          ErrorToaster(" Alert ", "Something went wrong !!!");
        }
      );
  };
}

