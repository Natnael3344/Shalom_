import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const AppBar = () => (
  <View>
    <View style={{ justifyContent:'center', flexDirection: 'row', alignItems: 'center' }}>
    
              <Image source={require('../assets/png/notificationwhite.png')} style={{ width: 30, height: 30, marginLeft: 15 }} />
            
              <TouchableOpacity>
                <View style={{ backgroundColor: 'red', borderRadius: 10, padding: 5, marginRight: 10 }}>
                  <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>3</Text>
                </View>
              </TouchableOpacity>
            
          </View>
  </View>
);

export default AppBar;
