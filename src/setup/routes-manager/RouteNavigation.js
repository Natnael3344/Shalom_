import React, { useEffect, useState } from 'react';
import { NavigationContainer} from '@react-navigation/native';

import { connect } from 'react-redux';
import { navigationRef } from './RootNavigation';
import { AuthStack } from './AuthStack';
import AppStack from './AppStack';
import { getData } from '../../api/asyncStorage';




function Router(props) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await getData('token_value');
        setToken(storedToken || props.user); // Set token to storedToken or props.user
      } catch (error) {
        console.error('Error fetching token:', error);
        // Handle error fetching token
      }
    };

    fetchToken();
  }, [props.user]); 
  // let token;
  // token=getData('token_value');
  console.log('prpos',props.user);
//  if(props.user !== undefined)
//   {
//     token=props.user;
//   }
 console.log('token',token);
  return (
    
    <NavigationContainer ref={navigationRef}>
      {token !== null ? (
    Object.keys(token).length === 0 ? (
      <AuthStack loadingSignOut={props.loadingSignOut} />
    ) : (
      <AppStack />
    )
  ) : null}
    </NavigationContainer>
    
  );
  
}

const mapStateToProps = function(state) {
 
  return {
     user : state.login.user,
     loadingSignOut : state.loadingSignOut,
    //  user : state.otp.user,
    //  loadingSignOut : state.otp.loadingSignOut,
  }
}

export default connect(mapStateToProps)(Router);