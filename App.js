/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store, { persistor } from './src/config/Store';
import { PersistGate } from 'redux-persist/integration/react';
import ActivityLoader from './src/components/loader/ActivityLoader';
import { NativeBaseProvider, extendTheme } from 'native-base';
import Router from './src/setup/routes-manager/RouteNavigation';
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityLoader />} persistor={persistor}>
      <NativeBaseProvider theme={theme}>
    {/* <StatusBar hidden /> */}
  
    
    <Router />
    </NativeBaseProvider>
    </PersistGate>
    </Provider>
  );
};

export default App;