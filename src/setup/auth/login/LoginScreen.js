import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Keyboard,
  Modal,
  ActivityIndicator,
} from 'react-native';
import Background from '../../../components/Background';
import { RadioGroup } from 'react-native-radio-buttons-group';
import globalStyles, { COLOR, COLORS } from '../../../assets/css/styles';
import { Field, reduxForm } from 'redux-form';
import { LargeButton } from '../../../components/renderButton';
import { connect, useDispatch, useSelector } from 'react-redux';
import { renderTextField } from '../../../components/renderInput';
import { loginActions } from './Login.actons';
import validate from '../../../config/Validator';
import ActivityLoader from '../../../components/loader/ActivityLoader';
const LoginScreen = (props ) => {
 // props
  const { handleSubmit, reset, submitting,navigation } = props;
  const [isModalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (!isLoading) {
      setModalVisible(false);
    }else{
      setModalVisible(true);
    }
  }, [isLoading]);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.login.loading);
  useEffect(() => {
    if (!isLoading) {
      setModalVisible(false);
    }else{
      setModalVisible(true);
    }
  }, [isLoading]);
  navigateToForgotPasswordScreen = () => {
    navigation.navigate("Forgot");
  }
  _onSubmit =  (values) => {
    Keyboard.dismiss()
    props.login(values)
  }
  const radioButtons = useMemo(() => ([
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'English',
        value: 'English',
        color: '#11FFFFFF',
        borderColor: '#11FFFFFF',
        labelStyle:{
          color:'white',
        },
        selected:true

        
    },
    {
        id: '2',
        label: 'मराठी',
        value: 'मराठी',
        color: '#11FFFFFF',
        borderColor: '#11FFFFFF',
        labelStyle:{
          color:'white',
        }
    }
]), []);

  const [value, setValue] = useState('English');

 
  return( 
    <Background>
<View style={{ flex: 1,}}>
<Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center',flexDirection:'row',width:'300',height:'300'}}>
            
            <ActivityIndicator size="large" color={COLORS.BACKGROUND_COLOR_START}/>
            <Text style={{marginLeft:5,color:'black'}}>Please wait...</Text>
            
          </View>
        </View>
      </Modal>
        <Text
          style={{
            alignSelf: 'flex-end',
            marginTop: 20,
            marginRight: 20,
            color: 'white',
            fontSize: 15,
            fontWeight: 'bold',
          }}
        >
          Version
        </Text>

        <ScrollView style={{ flex: 1 }}>
          <View style={{ alignItems: 'center', paddingTop: 70}}>
            <Image
              source={require('../../../assets/png/logo.png')} 
              style={{ width: 110, height: 120, marginBottom: 10 }}
            />
            <View style={{width: '100%',paddingHorizontal:20,marginTop:20}}>
              <Field
                name="number"
                label="Mobile Number*" 
                component={renderTextField}
                // keyboardType={'phone-pad'}
                inputStyle={globalStyles.AuthTextInput}
              />
              <Field
                name="password"
                label="Password*" 
                component={renderTextField}
                inputStyle={globalStyles.AuthTextInput}
              />
            </View>
           

      <TouchableOpacity
      onPress={handleSubmit(this._onSubmit)}
        style={{
          width: '90%',
          height: 50,
          marginTop: 20,
          marginBottom: 20,
          backgroundColor: 'transparent',
          borderWidth: 2, 
         borderColor: '#77FFFFFF',
         borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',marginLeft:'20',marginRight:'20'
        }}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight:'bold' }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={{}}
        style={{
          width: '90%',
          height: 50,
          marginBottom: 20,
          backgroundColor: 'transparent',
          borderWidth: 2, 
         borderColor: '#77FFFFFF',
         borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',marginLeft:'20',marginRight:'20'
        }}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight:'bold' }}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={navigateToForgotPasswordScreen}
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginBottom: 20,
        }}>
        <View style={{ flex: 1,alignItems:'center' }}>
          
           
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  width: 18,
                  height: 18,
                  marginRight: 5,
                  marginLeft: 15,
                }}
                source={require('../../../assets/png/forgotpass.png')} 
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  marginRight: 20,
                }}
                numberOfLines={1}>
                Forgot Password
              </Text>
            
          </View>
        </View>
      </TouchableOpacity>
      <View 
      style={{ 
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#77FFFFFF',
    borderRadius: 5,
    padding: 8,}}>
      <RadioGroup 
            radioButtons={radioButtons }
            onPress={setValue}
            selectedId={value}
            layout='row'
            
            
        />
    </View>


          </View>
        </ScrollView>

    
      </View>

      <Image
        source={require('../../../assets/png/adividwhite.png')} 
        style={{ width: 120, height: 50, alignSelf: 'center', marginBottom: 10 }}
      />
      {/* Loader */}
      
    </Background>
);
}

// export default LoginScreen;
const mapStateToPros = (state) => {
  return ({ 
      user: state.login,
      loading : state.login.loading,
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
      login: (values) => dispatch(loginActions.login(values)),
      socialLogin : (socialData,data) => dispatch(loginActions.socialLogin(socialData,data)),
     
  }
}

Login = connect(
  mapStateToPros,
  mapDispatchToProps
)(LoginScreen)



export default reduxForm({
  form: 'Login',
  validate
  
})(Login);

