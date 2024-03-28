import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../auth/login/LoginScreen';
// import Dashboard from '../../screens/Dashboard';
// import ForgotPassword from '../auth/forgot-password/ForgotPassword';


const Stack = createStackNavigator();

export const AuthStack = (props) => {

  
  return (
    <Stack.Navigator initialRouteName={"Login"} screenOptions={{
      headerShown: false
    }}>
      
      <Stack.Screen name="Login" component={LoginScreen} />
     
      
    </Stack.Navigator>
  );
};