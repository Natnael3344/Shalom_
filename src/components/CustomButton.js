import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const CustomButton = ({onPress, text, loader, disableButton}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (loader || disableButton) {
          return false;
        } else {
          onPress();
        }
      }}
      style={styles.button}
      activeOpacity={0.7}>
      <LinearGradient
        colors={['#674fa3', '#00d4ff']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.gradient, {opacity: (loader || disableButton) ? 0.8 : 1}]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>{text}</Text>
          {loader && (
            <ActivityIndicator
              color={'#fff'}
              style={{left: 5}}
              animating={true}
            />
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    height: 45,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    display: 'flex',
  },
});
export default CustomButton;

