// @flow 

import axios from 'axios';
import zpApi, { api,config } from '../../../api/Api';
import DeviceInfo from 'react-native-device-info';
const VERIFY_URL = 'https://smarttrack.thirdi.app/api/app/session/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeData } from '../../../api/asyncStorage';
export const loginService = {
    login
};


/*----- Login Services Start -----*/
async function login(values) {
    
    const data = {
        username: values.number,
        password: values.password,
    }
    
    try {
        const res = await zpApi.authenticate(data.username, data.password);
        
        // Assuming the token is present in the response, you can store it in AsyncStorage here
        if (res) {
            await storeData('token_value', res);
        }
        console.log("RES",res);
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
}

/*----- Login Services End -----*/
