import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, data, object) => {
    try {
        if(object)
        {
            const jsondata = JSON.stringify(data);
            await AsyncStorage.setItem(key, jsondata);
        }
        else{
            await AsyncStorage.setItem(key, data);
        }
     
    } catch (e) {
      // saving error
    }
  };


  export const getData = async (key, object) => {
    try {
        if(object)
        {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        }
        else{
            const value = await AsyncStorage.getItem(key);
            return value;
        }
     
    } catch (e) {
      // saving error
    }
  };

  export const clearData = async key => {
    try {
        if(key)
        {
            await AsyncStorage.removeItem(key);
        }
        else{
            await AsyncStorage.clear();
        }
    } 
    catch (error) {
        
    }
  }