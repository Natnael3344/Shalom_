import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity, ListView, StyleSheet,Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DropDownButton from '../components/dropDown';
import { Field, reduxForm } from 'redux-form';
import globalStyles from '../assets/css/styles';
import { renderTextField } from '../components/renderInput';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const RoundedButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <LinearGradient
        colors={['#674fa3', '#00d4ff']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.gradient, {opacity:  1}]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.buttonText} numberOfLines={2}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

// Styles for the component



const Dashboard = (props) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const handleDropdownChange = (newValue) => {
    setValue(newValue);
  };
  const navigation = useNavigation();
  onPressEvent = (type) => {
    
    if(type === 'plan')
    {
      navigation.navigate('plan');
    }else if(type === 'audio')
    {
      navigation.navigate('audio');
    }else if(type === 'lyrics')
    {
      navigation.navigate('lyrics');
    }else if(type === 'schedules')
    {
      navigation.navigate('schedules');
    }else if(type === 'members')
    {
      navigation.navigate('members');
    }else if(type === 'gallery')
    {
      navigation.navigate('gallery');
    }
    

  }
  return (
    <View style={styles.container}>
    <RoundedButton text={'Yearly\nPlans                                  '} onPress={() => onPressEvent('plan')} />
    <RoundedButton text="Lyrics          " onPress={() => onPressEvent('lyrics')} />
    <RoundedButton text="Audio          " onPress={() => onPressEvent('audio')} />
    <RoundedButton text="Schedules                        " onPress={() => onPressEvent('schedules')} />
    <RoundedButton text={'Choir\nMembers                         '} onPress={() => onPressEvent('members')} />
    <RoundedButton text="Gallery         " onPress={() => onPressEvent('gallery')} /> 
  </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor:"#121212",
    paddingTop:30
  },
  buttonContainer: {
    backgroundColor: '#674fa3', // You can customize the color
    borderRadius: 40, // You can adjust the border radius as per your preference
    paddingVertical: 30,
    paddingHorizontal: 20,
    margin: 5,
    height:175,
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10, // For Android shadow
  
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left', 
    textAlignVertical: 'top',
  },
  gradient: {
    flex: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
};
const mapStateToPros = (state) => {
  return ({ 
      user: state.login,
      loading : state.login.loading,
  })
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//       login: (values) => dispatch(loginActions.login(values)),
//       socialLogin : (socialData,data) => dispatch(loginActions.socialLogin(socialData,data)),
     
//   }
// }

DashBoard = connect(
  mapStateToPros,
  // mapDispatchToProps
)(Dashboard)



export default reduxForm({
  form: 'DashBoard',
  // validate
  
})(DashBoard);
// export default Dashboard;
