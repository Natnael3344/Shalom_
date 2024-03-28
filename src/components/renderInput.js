// @flow
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Icon,
  input,
  TextInput,
  StyleSheet,
} from 'react-native';

// import globalStyles, {POPPINSREGULAR} from '../assets/css/styles';
import {TextArea, TextField} from 'native-base';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import globalStyles from '../assets/css/styles';
// import { propsFlattener } from 'native-base/lib/typescript/hooks/useThemeProps/propsFlattener';

// Returns Text Filds For Components

export function renderTextField({
  input,
  errorStyle,
  heightStyle,
  label,
  dark,
  inputStyle,
  placeholderTextColor,
  keyboardType,
  editable,
  secureTextEntry,
  meta: {touched, error},
}) {
  // let hasError = false;

  // if (touched && error !== undefined) {
  //   hasError = true;
  // }

  let textColor = '#999';
  let tintColor = '#999';
  let baseColor = '#999';
  let labelTextStyle = [globalStyles.lableText];
  let style = [
    globalStyles.text,
    {
      color: '#999',
      paddingHorizontal: 7,
      marginBottom: 3,
      fontSize: responsiveFontSize(1.8),
    },
  ];
  let containerStyle = [globalStyles.textInputContainer, inputStyle];
  let inputContainerStyle = [{borderColor: '#C5C7D8'}];

  errorStyle = errorStyle ? errorStyle : {};

  if (typeof dark != 'undefined') {
    textColor = '#999';
    tintColor = '#999';
    baseColor = '#999';
    labelTextStyle = [globalStyles.lableTextDark];
    style = [globalStyles.text, {color: '#999'}];
    containerStyle = [globalStyles.textInputContainerDark, inputStyle];
    //errorStyle          =   globalStyles.errorMsgDark
  }

  console.log('====rendertextfield====', editable, input.editable);

  let editableInput = true;
  if (typeof editable != 'undefined') {
    editableInput = editable;
  }

  heightStyle = heightStyle ? heightStyle : {};

  return (
    <View>
      <TextField
        {...input}
        key={label ? label.replace('', '_') : ''}
        keyboardType={keyboardType}
        label={''}
        placeholder={label}
        editable={editableInput}
        textColor={textColor}
        labelHeight={10}
        activeLineWidth={0.6}
        baseColor={baseColor}
        fontSize={responsiveFontSize(1.8)}
        labelFontSize={responsiveFontSize(1.5)}
        labelTextStyle={labelTextStyle}
        inputContainerPadding={responsiveHeight(2)}
        backgroundColor={'white'}
        borderRadius={30}
        marginTop={1}
        // style={[style,{height:responsiveHeight(5), marginTop : responsiveHeight(1)}]}
        containerStyle={[containerStyle]}
        inputContainerStyle={[globalStyles.AuthTextInput]}
        // style={{backgroundColor:'white'}}
        value={input.value}
        secureTextEntry={secureTextEntry}
        onEndEditing={evt => input.onBlur(evt.nativeEvent.text)}
      />
      {touched && error && (
        <Text style={[globalStyles.AuthErrorMsg]}>{error} </Text>
      )}
    </View>
  );
}

export const renderTextArea = ({
  input,
  errorStyle,
  heightStyle,
  label,
  dark,
  inputStyle,
  placeholderTextColor,
  keyboardType,
  secureTextEntry,
  meta: {touched, error},
})=> {
  
  let hasError = false;

  if (touched && error !== undefined) {
    hasError = true;
  }

  let textColor = '#999';
  let tintColor = '#999';
  let baseColor = '#999';
  let labelTextStyle = [globalStyles.lableText];
  let style = [
    globalStyles.text,
    {
      color: '#999',
      paddingHorizontal: 7,
      marginBottom: 3,
      fontSize: responsiveFontSize(1.8),
    },
  ];
  let containerStyle = [globalStyles.textInputContainer, inputStyle];
  let inputContainerStyle = [{borderColor: '#C5C7D8'}];

  errorStyle = errorStyle ? errorStyle : {};

  if (typeof dark != 'undefined') {
    textColor = '#999';
    tintColor = '#999';
    baseColor = '#999';
    labelTextStyle = [globalStyles.lableTextDark];
    style = [globalStyles.text, {color: '#999'}];
    containerStyle = [globalStyles.textInputContainerDark, inputStyle];
    //errorStyle          =   globalStyles.errorMsgDark
  }

  heightStyle = heightStyle ? heightStyle : {};

  return (
    <View>
      <TextField
        {...input}
        keyboardType={keyboardType}
        label={''}
        placeholder={label}
        textColor={textColor}
        labelHeight={10}
        activeLineWidth={0.6}
        baseColor={baseColor}
        fontSize={responsiveFontSize(1.8)}
        labelFontSize={responsiveFontSize(1.5)}
        labelTextStyle={labelTextStyle}
        inputContainerPadding={responsiveHeight(2)}
        backgroundColor={'white'}
        borderRadius={30}
        marginTop={1}
        containerStyle={[containerStyle]}
        inputContainerStyle={[globalStyles.AuthTextInput]}
        value={input.value}
        secureTextEntry={secureTextEntry}
        multiline={true}
        numberOfLines={4}
      />

      {touched && hasError && (
        <Text style={[globalStyles.AuthErrorMsg]}>{error} </Text>
      )}
    </View>
  );
}

export function renderTextInput({
  input,
  errorStyle,
  heightStyle,
  label,
  dark,
  inputStyle,
  placeholderTextColor,
  keyboardType,
  onEndEditing,
  secureTextEntry,
  meta: {touched, error},
}) {
  let hasError = false;

  if (touched && error !== undefined) {
    hasError = true;
  }

  let textColor = '#999';
  let tintColor = '#999';
  let baseColor = '#999';
  let labelTextStyle = [globalStyles.lableText];
  let style = [
    globalStyles.text,
    {
      color: '#999',
      paddingHorizontal: 7,
      marginBottom: 3,
      fontSize: responsiveFontSize(1.8),
    },
  ];
  let containerStyle = [globalStyles.textInputContainer, inputStyle];
  let inputContainerStyle = [{borderColor: '#C5C7D8'}];

  errorStyle = errorStyle ? errorStyle : {};

  if (typeof dark != 'undefined') {
    textColor = '#999';
    tintColor = '#999';
    baseColor = '#999';
    labelTextStyle = [globalStyles.lableTextDark];
    style = [globalStyles.text, {color: '#999'}];
    containerStyle = [globalStyles.textInputContainerDark, inputStyle];
    //errorStyle          =   globalStyles.errorMsgDark
  }

  heightStyle = heightStyle ? heightStyle : {};

  return (
    <View>
      <TextInput
        {...input}
        label={''}
        placeholder={label}
        textColor={textColor}
        labelHeight={10}
        activeLineWidth={0.6}
        baseColor={baseColor}
        fontSize={responsiveFontSize(1.8)}
        labelFontSize={responsiveFontSize(1.5)}
        labelTextStyle={labelTextStyle}
        inputContainerPadding={responsiveHeight(2)}
        backgroundColor={'white'}
        borderRadius={30}
        marginTop={1}
        containerStyle={[containerStyle]}
        inputContainerStyle={[globalStyles.AuthTextInput]}
        value={input.value}
        keyboardType={keyboardType}
        style={styles.container}
        // onEndEditing={evt => input.onBlur(evt.nativeEvent.text)}
        onEndEditing={event => onEndEditing(event.nativeEvent.text)}
      />
      {/* <TextField
          {...input}
          key={label ? label.replace('', '_') : ''}
          keyboardType={keyboardType}
          label={''}
          placeholder={label}
          textColor={textColor}
          labelHeight={10}
          activeLineWidth={0.6}
          baseColor={baseColor}
          fontSize={responsiveFontSize(1.8)}
          labelFontSize={responsiveFontSize(1.5)}
          labelTextStyle={labelTextStyle}
          inputContainerPadding={responsiveHeight(2)}
          backgroundColor={'white'}
          borderRadius={30}
          marginTop={1}
          // style={[style,{height:responsiveHeight(5), marginTop : responsiveHeight(1)}]}
          containerStyle={[containerStyle]}
          inputContainerStyle={[globalStyles.AuthTextInput]}
          // style={{backgroundColor:'white'}}
          value={input.value}
          secureTextEntry={secureTextEntry}
          onEndEditing={evt => input.onBlur(evt.nativeEvent.text)}
        /> */}
      {touched && hasError && (
        <Text style={[globalStyles.AuthErrorMsg]}>{error} </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    borderColor: '#C5C7D8',
    borderWidth: 1,
    color: 'black',
  },
});
