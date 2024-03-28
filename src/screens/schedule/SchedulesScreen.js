import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const RoundedButton = ({ text, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <LinearGradient
        colors={['#674fa3', '#00d4ff']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.gradient, {opacity: 1}]}>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.buttonText} numberOfLines={2}>{text}</Text>
        </View>
      </LinearGradient>
        
      </TouchableOpacity>
    );
  };
const SchedulesScreen = () => {
    const navigation = useNavigation();
    onPressEvent = (type) => {
      
      if(type === 'prayer')
      {
        navigation.navigate('prayer');
      }else if(type === 'conductor')
      {
        navigation.navigate('conductor');
      }
      
  
    }
  return (
    <View style={styles.container}>
    <RoundedButton text={'Prayer Schedule'} onPress={() => onPressEvent('prayer')} />
    <RoundedButton text="Choir Conductor Schedule" onPress={() => onPressEvent('conductor')} />
  </View>
  )
}

export default SchedulesScreen
const styles = {
    container: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"white",
      alignContent:'center'
    },
    gradient: {
      paddingVertical: 30,
      paddingHorizontal: 20,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      backgroundColor: '#674fa3', // You can customize the color
      borderRadius: 40, // You can adjust the border radius as per your preference
      
      margin: 5,
      alignItems: 'center', 
      justifyContent: 'center',
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
  
    
  };