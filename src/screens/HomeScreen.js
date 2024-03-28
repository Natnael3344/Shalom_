import AppBar from "./AppBar";
import Dashboard from "./Dashboard";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const HomeScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Dashboard} options={{ headerShown: false}} />
    </Stack.Navigator>
  );
  export default HomeScreen;