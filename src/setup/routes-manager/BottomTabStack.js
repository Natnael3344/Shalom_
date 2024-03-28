import {createStackNavigator} from '@react-navigation/stack';
import React, { useState } from 'react';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
   
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Image, View, Text, SafeAreaView, ScrollView,Alert,TouchableOpacity, Pressable, Dimensions, StyleSheet, TextInput} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import PhoneInfo from '../../screens/PhoneInfo';
import Dashboard from '../../screens/Dashboard';
import globalStyles from '../../assets/css/styles';
import QRPatrolling from '../../screens/QR Patrolling';
import { DrawerActions } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { COLOR } from '../../assets/constants/GlobalConstants';
import { DashboardTabScreen, LogoTitle } from './AppStack';
import LinearGradient from 'react-native-linear-gradient';
import Notification from '../../screens/notification/Notification';
import { NotificationList } from '../helpers/fcmHelper';
const { width } = Dimensions.get('window');
const Tab = createBottomTabNavigator();
const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Handle search logic here, e.g., fetch songs based on searchText
    console.log('Searching for:', searchText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#674fa3" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search song"
          placeholderTextColor={'black'}
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
      </View>
    </View>
  );
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <LinearGradient
      colors={['#674fa3', '#00d4ff']}
      style={styles.tabBar}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.tabBarWrapper}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          let iconName;
          if (label === 'dashboard') {
            iconName = 'home-outline';
          } else if (label === 'notification') {
            iconName = 'notifications-outline';
          } else {
            iconName = 'menu';
          }
          return (
            <Ionicons
              key={index}
              name={iconName}
              size={30}
              color={isFocused ? 'black' : 'white'}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, textAlign: 'center' }}
            />
          );
        })}
      </View>
    </LinearGradient>
  );
};
const BottomTabStack = ({navigation}) => {

    
    return (
      <View style={{ flex: 1, backgroundColor: '#121212' }}>
        
        <Tab.Navigator
          initialRouteName="dashboard"
          tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={{
            
            // tabBarStyle: globalStyles.dashBoardBottomBar,
            headerStyle: {
              backgroundColor: COLOR.BACKGROUND_COLOR,
            },
        
            headerLeft: () => (
              <Ionicons
                name="arrow-back-sharp"
                size={30}
                color="black"
                onPress={() => navigation.navigate("dashboard")}
                style={{marginLeft: 15}}
              />
            ),
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}>
          <Tab.Screen
            name="tab"
            component={Dashboard}
            listeners={({ navigation }) => ({
                tabPress: e => {
                  e.preventDefault();
                  navigation.openDrawer();
                }
              })}
            options={{
            //   header: ({navigation, route, options}) => {
            //     return <LogoTitle title={route.name} navigation={navigation} />;
            //   },
              title: '',
              headerShown:false,
              tabBarIcon: () => <Ionicons name="menu" size={30} color="white"  />,
                   }}
          />
          <Tab.Screen
            name="dashboard"
            component={Dashboard}
            options={{
              title: '',
              tabBarLabel: '',
              header: () => {
                return <SearchComponent />;
              },
              tabBarIcon: () => <Ionicons name="home-outline" size={30} color="white"  />,
            }}
          />
  
          <Tab.Screen
            name="notification"
            component={Notification}
            options={{
              title: 'Notification',
              tabBarLabel: '',
              tabBarIcon: () => <Ionicons name="notifications-outline" size={30} color="white"  />,
            }}
          />
          
        </Tab.Navigator>

        </View>
    );
  };
  const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 20,
    backgroundColor:'#121212',
    
    
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth:2,
    borderColor:'#674fa3',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color:'black'
  },
    tabBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 15,
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
    },
    tabBarWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      flex: 1,
    },
  });
  export default BottomTabStack;