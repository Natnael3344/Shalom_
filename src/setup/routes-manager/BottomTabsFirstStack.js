import { connect } from "react-redux";
import BottomTabStack from "./BottomTabStack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TextInput, View } from "react-native";
import YearlyPlansScreen from "../../screens/plans/YearlyPlans";
import AudioScreen from "../../screens/audio/AudioScreen";
import LyricsScreen from "../../screens/lyrics/LyricsScreen";
import LyricsDetailScreen from "../../screens/lyrics/LyricsDetailScreen";
import SchedulesScreen from "../../screens/schedule/SchedulesScreen";
import Prayer from "../../screens/schedule/Prayer";
import Conductor from "../../screens/schedule/Conductor";
import MembersList from "../../screens/members/MembersList";
import MembersDetail from "../../screens/members/MembersDetail";
import GalleryScreen from "../../screens/gallery/GalleryScreen";
const { useNavigation } = require("@react-navigation/native");
const { useEffect } = require("react");
const { useState } = require("react");
const { default: zpApi } = require("../../api/Api");
const { api } = require("../../api/Api");
const { config } = require("../../api/Api");
const { createStackNavigator } = require("@react-navigation/stack");
const { TouchableOpacity } = require("react-native-gesture-handler");
const { Image } = require("react-native-svg");
const { default: Dashboard } = require("../../screens/Dashboard");
const { LogoTitle } = require("./AppStack");
const Stack = createStackNavigator();


const BottomTabsFirstStack =  (props) => {
    const navigation = useNavigation();  
  // console.log(res);
    return (
      <Stack.Navigator
      initialRouteName="dashboards"
        screenOptions={{
          
          headerStyle: {
            backgroundColor: 'white',
            
          },
          headerLeft: () => (
            <Ionicons
              name="arrow-back-sharp"
              size={30}
              color="#674fa3"
              onPress={() => navigation.goBack()}
              style={{marginLeft: 15,marginTop:10}}
            />
          ), 
          headerTintColor: '#674fa3',
          headerTitleAlign: 'center',
        }}>
        
        <Stack.Screen
          name="dashboards"
          component={BottomTabStack}
          options={{
            headerShown:false,
            title: 'Scan QR Code', //Set Header Title
          }}
        />
       <Stack.Screen
          name="plan"
          component={YearlyPlansScreen}
          options={{
            title: 'Yearly Plans', //Set Header Title
          }}
        />
        <Stack.Screen
          name="audio"
          component={AudioScreen}
          options={{
            title: 'Audios', //Set Header Title
          }}
        />
        <Stack.Screen
          name="lyrics"
          component={LyricsScreen}
          options={{
            title: 'Lyrics', //Set Header Title
          }}
        />
        <Stack.Screen
          name="detail"
          component={LyricsDetailScreen}
          options={{
            title: '', 
          }}
        />
        <Stack.Screen
          name="schedules"
          component={SchedulesScreen}
          options={{
            title: 'Schedules', 
          }}
        />
        <Stack.Screen
          name="prayer"
          component={Prayer}
          options={{
            title: 'Prayer Schedule', 
          }}
        />
        <Stack.Screen
          name="conductor"
          component={Conductor}
          options={{
            title: 'Conductor Schedule', 
          }}
        />
        <Stack.Screen
          name="members"
          component={MembersList}
          options={{
            title: 'Members', 
          }}
        />
        <Stack.Screen
          name="member"
          component={MembersDetail}
          options={{
            title: '', 
          }}
        />
        <Stack.Screen
          name="gallery"
          component={GalleryScreen}
          options={{
            title: 'Gallery', 
          }}
        />
      </Stack.Navigator>
    );
  };
  const mapStateToProps = function(state) {
    return {
      user: state.login.user,
    };
  };
  export default connect(mapStateToProps)(BottomTabsFirstStack);