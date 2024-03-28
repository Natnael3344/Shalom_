import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const DrawerMain = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <ScrollView>
      <View style={{ padding: 16,backgroundColor:'#005a64' }}>
        <Text>Drawer Header</Text>
        {/* Add your drawer header content here */}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ padding: 16 }}>
        <Text>Scan QR Code</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ padding: 16 }}>
        <Text>QR Map Locations</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ padding: 16 }}>
        <Text>Activate QR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ padding: 16 }}>
        <Text>My Tour Diary</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ padding: 16 }}>
        <Text>Phone Info</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ padding: 16 }}>
        <Text>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ padding: 16 }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

export default DrawerMain;
