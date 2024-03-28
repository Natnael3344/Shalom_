import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import zpApi from '../../api/Api';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Conductor = () => {
    const [conductors, setConductors] = useState([]);

    useEffect(() => {
        const fetchConductors = async () => {
            try {
                const conductorsData = await zpApi.getConductor(); 
                setConductors(conductorsData);
            } catch (error) {
                console.error('Error fetching conductors:', error);
            }
        };

        fetchConductors();

    }, []);
  return (
    <View>
      {conductors.map((conductor, index) => (
                <ListItem key={index} bottomDivider>
                    <Ionicons name='calendar-number-outline' color='#674fa3' size={30} containerStyle={styles.iconContainer} />
                    <ListItem.Content>
                        <ListItem.Title style={{ fontWeight: 'bold' }}>{new Date(conductor.date.seconds * 1000).toLocaleDateString()}</ListItem.Title>
                        <ListItem.Subtitle>{conductor.name}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            ))}
    </View>
  )
}

export default Conductor
const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: '#cccccc',
        padding: 10,
        borderRadius: 20,
    },
});