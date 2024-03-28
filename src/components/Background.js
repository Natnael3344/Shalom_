import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../assets/css/styles';

const Background = ({
  colors = [COLORS.BACKGROUND_COLOR_START, COLORS.BACKGROUND_COLOR_END],
  
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  children,
}) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={{
          flex: 1,
        }}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

export default Background;
