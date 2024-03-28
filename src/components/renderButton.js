import React,{Component} from 'react';
import {View, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import { Icon, Row, Col, Text } from 'native-base';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import globalStyles from '../assets/css/styles';
// import globalStyles from '../assets/css/styles';

const GradientBtn = ({ name, gradientStyle, gradientTextStyle }) => (
   
  <LinearGradient
      colors={['#6491D2', '#54ACB8', '#4CB7AF']}
      start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      }}>  
    <Text style={{
    fontSize: 16,
    color: 'white',
    fontWeight:'bold',
    alignSelf: 'center',
  }}>{name}</Text>
  </LinearGradient>
)

export const SmallButton = (props) => {
	
  let TouchablePlatformSpecific = Platform.OS === 'ios' ? 
  TouchableOpacity : 
  TouchableOpacity;

  let buttonTitle			=	typeof props.title != 'undefined' ? props.title : '';
  let buttonStyle			=	typeof props.style != 'undefined' ? props.style : '';

  return (
  <TouchablePlatformSpecific style={[buttonStyle]} onPress={props.onPressEvent}>
  <GradientBtn name={buttonTitle} gredientStyle={[globalStyles.gradientRound]} gradientTextStyle={globalStyles.buttonSmallCenterText}/>
  </TouchablePlatformSpecific>
  );
}

export const mediumButton = (props) => {
	
  let TouchablePlatformSpecific = Platform.OS === 'ios' ? 
       TouchableOpacity : 
       TouchableOpacity;
    
  let buttonTitle			=	typeof props.title != 'undefined' ? props.title : '';
  let buttonStyle			=	typeof props.style != 'undefined' ? props.style : '';
 
   return (
   <TouchablePlatformSpecific style={[buttonStyle]} onPress={props.onPressEvent}>
     <GradientBtn name={buttonTitle} gredientStyle={[globalStyles.gradientRound]} gradientTextStyle={globalStyles.buttonSmallCenterText}/>
   </TouchablePlatformSpecific>
   );
}

export const LargeButton = (props) => {
	
  let TouchablePlatformSpecific = Platform.OS === 'ios' ? 
       TouchableOpacity : 
       TouchableOpacity;
    
  let buttonTitle			=	typeof props.title != 'undefined' ? props.title : '';
  let buttonStyle			=	typeof props.style != 'undefined' ? props.style : '';
 
   return (
   <TouchablePlatformSpecific style={[buttonStyle]} onPress={props.onPressEvent}>
     <GradientBtn name={buttonTitle} gredientStyle={[globalStyles.gradientRound]} gradientTextStyle={globalStyles.buttonSmallCenterText}/>
   </TouchablePlatformSpecific>
   );
}

