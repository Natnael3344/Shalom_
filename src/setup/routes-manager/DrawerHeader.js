import React from 'react';
import { connect } from 'react-redux';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../assets/png/logo.png';
import drawerHeaderStyle from './DrawerHeaderStyle';
import LinearGradient from 'react-native-linear-gradient';

const DrawerHeader = props => {

  let name;
  if(props.user?.data !== undefined)
  {
    name = props.user.data.name;
  }
  
  return (
      <LinearGradient
        colors={['#674fa3', '#00d4ff']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.container, {opacity: 1}]}>
        <View style={styles.profileContainer}>
        <Image source={Logo} style={styles.avatar} />
        <Text style={styles.profileName}>Natnael Tamirat</Text>
        <TouchableOpacity onPress={{}} style={styles.editProfile}>
        <MaterialIcons name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.themeContainer}>
        <TouchableOpacity onPress={{}}>
          <MaterialIcons name="brightness-6" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={{}}>
          <MaterialIcons name="brightness-3" size={24} color="black" />
        </TouchableOpacity>
      </View>
      </LinearGradient>
  );
};



const mapStateToProps = function(state) {
  return {
     user : state.login.user
  }
}

export default connect(mapStateToProps)(DrawerHeader);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor:'#674fa3'
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    color:'white',
    fontWeight: 'bold',
  },
  changeProfile: {
    marginLeft: 'auto',
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editProfile: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});