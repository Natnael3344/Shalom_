import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import globalStyles from '../../assets/css/styles';
import { COLOR } from '../../assets/constants/GlobalConstants';

class ActivityLoader extends Component {
   state = { animating: true }
   
   render() {    
      return (
         <View style = {globalStyles.activityIndicatorContainer}>         
            <ActivityIndicator             
               color = {COLOR.SELECTED_BOTTOM_MENU}
               size = "large"
               style = {globalStyles.activityIndicator}/>            
         </View>
      )
   }
}

export default ActivityLoader

