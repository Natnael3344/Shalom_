import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import { connect } from "react-redux";
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
   
} from '@react-navigation/drawer';


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, Text, SafeAreaView, ScrollView,Alert,TouchableOpacity, Pressable, Dimensions, StyleSheet} from 'react-native';


import { Divider, Drawer } from 'react-native-paper';


import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerHeader from './DrawerHeader';
import DrawerFooter from './DrawerFooter';
import MapLocation from '../../screens/MapLocation';
import MapRoute from '../../screens/MapRoute';
import ActivateQR from '../../screens/ActivateQR';
import TourDairy from '../../screens/TourDairy';
import PhoneInfo from '../../screens/PhoneInfo';
import LogOut from '../auth/logout/LogOut';
import Dashboard from '../../screens/Dashboard';
import LoginScreen from '../auth/login/LoginScreen';
import globalStyles from '../../assets/css/styles';
import zpApi, { api, config } from '../../api/Api';
import { useEffect, useState } from 'react';
import BottomTabsFirstStack from './BottomTabsFirstStack';
import QRPatrolling from '../../screens/QR Patrolling';
import { Icon } from 'native-base';
import DrawerDivider from './DrawerDivider';
import { clearData } from '../../api/asyncStorage';
const { width } = Dimensions.get('window');


const Stack = createStackNavigator();
const Drawers = createDrawerNavigator();

performLogout = (props) => {
  //const dispatch = useDispatch()

 
 // dispatch(OTPActions.logout());

  AsyncStorage.clear();
  //props.navigation.dispatch(CommonActionsCreator.success(OTPConstants.LOGOUT_SUCCESS));
    
};


export const DashboardTabScreen = ({ navigation }) => {
  return (
    navigation.dispatch(DrawerActions.toggleDrawer())
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     {/* Your tab content goes here */}
  //     <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        
  //     </TouchableOpacity>
     
  //   </View>
  );
};


export const LogoTitle = props => {
  
  return (
      <View >
        <TouchableOpacity
      
          onPress={() =>
            props.navigation.dispatch(DrawerActions.toggleDrawer())
          }>
          <Ionicons name="menu" size={30} color="#674fa3" />
        </TouchableOpacity>
      </View>
      
      
   
  );
};


// export const LogoTitle = props => {
  
//   return (
//     <View style={globalStyles.dashBoardAppBar}>
//       <View style={{flex: 1, alignItems: 'flex-start'}}>
//         <TouchableOpacity
      
//           onPress={() =>
//             props.navigation?.dispatch(DrawerActions.toggleDrawer())
//           }>
//           <Image
//             source={require('../../assets/png/humburger-icon.png')}
//             resizeMode="contain"
//             style={{width: 25, height: 25}}
//           />
//         </TouchableOpacity>
//       </View>
      
      
//       <View style={{ justifyContent:'center', flexDirection: 'row', alignItems: 'center' }}>
    
//               <Image source={require('../../assets/png/notificationwhite.png')} style={{ width: 30, height: 30, marginLeft: 15 }} />
            
//               <TouchableOpacity>
//                 <View style={{ backgroundColor: 'red', borderRadius: 10, padding: 5, marginRight: 10 }}>
//                   <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>3</Text>
//                 </View>
//               </TouchableOpacity>
            
//           </View>
//     </View>
//   );
// };


function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <DrawerHeader />
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <DrawerItemList {...props} />
        </ScrollView>
        <DrawerFooter {...props} />
      </View>
    </SafeAreaView>
  );
}
const DrawerSectionTitle = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999999',
  },
});
// function CustomDrawerContent({props,menuItems}) {
//   // const { menuItems } = props;

  

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 1 }}>
//         <DrawerHeader />
//         <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
//           {menuItems.length>0?menuItems.map((section, index) => (
//             console.log("Section",section),
//             <View key={index}>
              
//               <DrawerSectionTitle key={index} title={section.section} />
//               <DrawerItem
//                   key={index}
//                   label={section.title}
//                   onPress={() => ({})}
//                 />
//              {index < menuItems.length - 1 && (
//   <View>
//     <Divider />
//   </View>
// )}
//             </View>
//           )):null}
//         </ScrollView>
//         <DrawerFooter {...props} />
//       </View>
//     </SafeAreaView>
//   );
// }

// function CustomDrawerContent({ props, menuItems }) {
//   // Extract unique sections from menuItems
//   const uniqueSections = [...new Set(menuItems.map(item => item.section))];
//   const navigation = useNavigation(); 
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 1 }}>
//         <DrawerHeader />
//         <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
//           {uniqueSections.map((section, index) => (
//             <View key={index}>
//               <DrawerSectionTitle key={index} title={section} />
//               {menuItems
//                 .filter(item => item.section === section)
//                 .map((item, itemIndex) => (
//                   <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',marginLeft:30}} onPress={() => navigation.navigate(item.name)} key={itemIndex}>
                   
//                       <Image
//                         source={{ uri: item.icon }} // Assuming each item has an 'imageUrl' property
//                         style={{ width: 20, height: 20, marginRight: 10 }} // Adjust width and height as per your design
//                       />
                      
//                       <DrawerItem
//                         key={itemIndex}
//                         label={item.title}
//                         labelStyle={{color:'black'}}
//                         style={{flex:1}}
//                         onPress={() => navigation.navigate(item.name)}
//                       />
                   
//                   </TouchableOpacity>
//                 ))}
//               {index < uniqueSections.length - 1 && (
//                 <View>
//                   <Divider />
//                 </View>
//               )}
//             </View>
//           ))}
//         </ScrollView>
//         <DrawerFooter {...props} />
//       </View>
//     </SafeAreaView>
//   );
// }



const DrawerNavigator = props => {
  const navigation = useNavigation();
 
  return (
    <Drawers.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerItemStyle: {marginVertical: 0},
        drawerActiveTintColor: '#000000',
        drawerActiveBackgroundColor: 'transparent',
        inactiveTintColor: '#000000',
        inactiveBackgroundColor: '',
        backBehavior: 'history',
        // header : ({ navigation, route, options }) => { return <BackHeader title={route.name} navigation={navigation} />}
        headerStyle: {
          backgroundColor: '#005a64',
        },
        headerLeft: () => (
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{marginLeft: 15}}>
          <Image
            source={require('../../assets/png/arrow-back.png')}
            resizeMode="contain"
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        ),
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>

      <Drawers.Screen
        name="home"
        component={BottomTabsFirstStack}
        options={{
          title: 'Dashboard',
          headerShown: false,
        }}
      />
      
      <Drawers.Screen
        name="activate"
        component={ActivateQR}
        options={{
          title: 'Rules and Regulations', //Set Header Title
        }}
      />
      
      {/* <Drawers.Screen
        name="logout"
        component={LogOut}
        listeners={({ navigation }) => ({
          drawerItemPress: async e => {
            await clearData('token_value');
            navigation.goBack();
          }
        })}
        options={{
          title: 'Logout',
        }}
      />
       */}
     
    </Drawers.Navigator>
  );
};






// const AppStack = (props) => {
//   const navigation = useNavigation();
//   const [menuItems, setMenuItems] = useState([]);
//   const [active, setActive] = useState('');
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//       let user_id;
//       let token_id;
//       let token_value;
//       if(props.user?.data !== undefined)
//     {
//       token_value = props.user.data.token_value;
//       user_id = props.user.data.user_id;
//       token_id = props.user.data.token_id;
//     }
//     const data = Object.assign({}, {
//       user_id: user_id,
//       token_id: token_id,
//       token_value: token_value
//     })
    
//     const res = await zpApi.post(`${api}${config.endpoint.menuUrl}`, null, null, data);
//     console.log("Menu",res);
    
//     const categories = res.result.filter(item => item.category === "QR Patrolling")
//     .map(item => ({
//       name: item.item, // Assign item name as screen name
//       component: BottomTabsFirstStack,
//       title: item.item // Assuming 'itemmar' is used as the title
//     }));
//     const groupedMenuItems = res.result.reduce((acc, currentItem) => {
//       const { category, item, icon } = currentItem;
//       if (!acc[category]) {
//         acc[category] = [];
//       }
//       acc[category].push({ item, icon });
//       return acc;
//     }, {});
//     const resolveComponent = (itemName) => {
//       switch (itemName) {
//         case 'Scan QR Code':
//           return BottomTabsFirstStack; 
//         case 'QR Report':
//           return BottomTabsFirstStack; 
//         case 'QR Map Locations':
//           return BottomTabsFirstStack; 
//         case 'Activate QR':
//           return BottomTabsFirstStack; 
//         case 'PCR Tracking':
//           return BottomTabsFirstStack; 
//         case "Show Today's PCR Track":
//           return BottomTabsFirstStack; 
//         case 'Track My Duty (Custom)':
//           return BottomTabsFirstStack;
//         case 'View My Duty (Custom)':
//           return BottomTabsFirstStack; 
//         case 'Update Profile':
//           return BottomTabsFirstStack;
//         case 'Phone Info':
//           return BottomTabsFirstStack; 
//         case 'Contact Us':
//           return BottomTabsFirstStack;  
//         case 'Logout':
//           return BottomTabsFirstStack;    
//         default:
//           return null;
//       }
//     };
//     const filteredItems = res.result.filter(item =>
//       ["PCR Tracking", "Show Today's PCR Track", "Track My Duty (Custom)",
//         "Scan QR Code", "QR Report", "QR Map Locations", "Activate QR", "View My Duty (Custom)",
//         "Phone Info", "Contact Us", "Logout"].includes(item.item,item.category,item.icon)
//     ).map(item => ({
//       name: item.item, 
//       component: resolveComponent(item.item),
//       title: item.item,
//       section:item.category,
//       icon:item.icon 
//     }));


//     setMenuItems(filteredItems);
//     console.log('Grouped Menu Items:', filteredItems);
    
//     // Print categories
   
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     // Handle error state or log error information
//   }
//     }
//     fetchData();
//     }, [props]);
  
  

//     console.log("Menu Items",menuItems)
//   return (
//     <Drawers.Navigator
//       drawerContent={props => <CustomDrawerContent {...props} menuItems={menuItems} />}
//       screenOptions={{
//         drawerItemStyle: { marginVertical: 0 },
//         drawerActiveTintColor: '#000000',
//         drawerActiveBackgroundColor: 'transparent',
//         inactiveTintColor: '#000000',
//         inactiveBackgroundColor: '',
//         backBehavior: 'history',
//         headerStyle: {
//           backgroundColor: '#005a64',
//         },
//         headerLeft: () => (
//           <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
//             <Image
//               source={require('../../assets/png/arrow-back.png')}
//               resizeMode="contain"
//               style={{ width: 25, height: 25 }}
//             />
//           </TouchableOpacity>
//         ),
//         headerTintColor: 'white',
//         headerTitleAlign: 'center',
//       }}>
//        {/* <Drawer.Screen
//               name="home"
//               component={BottomTabsFirstStack}
//               options={{
//                 title: 'Scan QR Code',
//                 headerShown: false,
//               }}
//             /> */}
//         {menuItems.length > 0?menuItems.map((menuItem, index) => {
         
//          if (menuItem.section) {
//           return (
//             <React.Fragment key={index}>
              
//               <Drawers.Screen
//                 name={menuItem.name}
//                 component={menuItem.component}
//                 options={{ title: menuItem.title, headerShown: false }}
//               />
//             </React.Fragment>
//           );
//         } else {
//           return (
//             <Drawers.Screen
//               key={index}
//               name={menuItem.name}
//               component={menuItem.component}
//               options={{ title: menuItem.title, headerShown: false }}
//             />
//           );
//         }
//       // if (menuItem.section) {
//       //   return (
//       //     <React.Fragment key={index}>
            
//       //       <Drawer.Screen
//       //         name={menuItem.name}
//       //         component={menuItem.component}
//       //         options={{ title: menuItem.title, headerShown: false }}
//       //       />
//       //       {menuItem.section && (
//       //   <Drawer.Screen
//       //     name={`Divider_${index}`} // Use a unique name for the divider
//       //     component={DrawerDivider} // Render the custom divider component
//       //   />
//       // )}
//       //     </React.Fragment>
//       //   );
//       // } else {
//       //   return (
//       //     <Drawer.Screen
//       //       key={index}
//       //       name={menuItem.name}
//       //       component={menuItem.component}
//       //       options={{ title: menuItem.title, headerShown: false }}
//       //     />
//       //   );
//       // }
//     }):<Drawers.Screen
//     name="home"
//     component={BottomTabsFirstStack}
//     options={{
//       title: 'Scan QR Code',
//       headerShown: false,
//     }}
//   />}
          
          
            
//     </Drawers.Navigator>
//   );
// };



//  const AppStack = () => {
//   const navigation = useNavigation();
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <CustomDrawerContent {...props} />}
//       screenOptions={{
//         drawerItemStyle: {marginVertical: 0},
//         drawerActiveTintColor: '#000000',
//         drawerActiveBackgroundColor: 'transparent',
//         inactiveTintColor: '#000000',
//         inactiveBackgroundColor: '',
//         backBehavior: 'history',
//         // header : ({ navigation, route, options }) => { return <BackHeader title={route.name} navigation={navigation} />}
//         headerStyle: {
//           backgroundColor: '#005a64',
//         },
//         headerLeft: () => (
//           <TouchableOpacity
//           onPress={() => navigation.goBack()}
//           style={{marginLeft: 15}}>
//           <Image
//             source={require('../../assets/png/arrow-back.png')}
//             resizeMode="contain"
//             style={{width: 25, height: 25}}
//           />
//         </TouchableOpacity>
//         ),
//         headerTintColor: 'white',
//         headerTitleAlign: 'center',
//       }}>
//       <Drawer.Screen
//         name="home"
//         component={BottomTabsFirstStack}
//         options={{
//           title: 'Scan QR Code',
//           headerShown: false,
//         }}
//       />
//       <Drawer.Screen
//         name="location"
//         component={MapRoute}
//         options={{
//           title: 'QR Map Locations',
//         }}
//       />
     
//       <Drawer.Screen
//         name="activate"
//         component={ActivateQR}
//         options={{
//           title: 'Activate QR', //Set Header Title
//         }}
//       />
//       <Drawer.Screen
//         name="tour"
//         component={TourDairy}
//         options={{
//           title: 'My Tour Diary',
//         }}
//       />
//       <Drawer.Screen
//         name="phone"
//         component={PhoneInfo}
//         options={{
//           title: 'Phone Info',
//         }}
//       />
      
//       <Drawer.Screen
//         name="contact"
//         component={MapLocation}
//         options={{
//           title: 'Contact Us',
//         }}
//       />
//       <Drawer.Screen
//         name="logout"
//         component={LogOut}
//         options={{
//           title: 'Logout',
//         }}
//       />
      
     
//     </Drawer.Navigator>
//   );
// };
const AppStack = (props) => {
  return <DrawerNavigator />;
};
const mapStateToProps = function(state) {
  return {
    user: state.login.user,
  };
};
export default connect(mapStateToProps)(AppStack);
// const AppStack = ({ user}) => {
  
//   return <DrawerNavigator />;
// };
 