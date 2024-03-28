import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import zpApi from '../../api/Api';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Prayer = () => {
    const [prayers, setPrayers] = useState([]);

    useEffect(() => {
        const fetchPrayers = async () => {
            try {
                const prayersData = await zpApi.getPrayer(); 
                setPrayers(prayersData);
            } catch (error) {
                console.error('Error fetching prayers:', error);
            }
        };

        fetchPrayers();

    }, []);
    
  return (
    <View>
      {prayers.map((prayer, index) => (
                <ListItem key={index} bottomDivider>
                    <Ionicons name='calendar-number-outline' color='#674fa3' size={30} containerStyle={styles.iconContainer} />
                    <ListItem.Content>
                        <ListItem.Title style={{ fontWeight: 'bold' }}>{new Date(prayer.date.seconds * 1000).toLocaleDateString()}</ListItem.Title>
                        <ListItem.Subtitle>{prayer.name}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            ))}
    </View>
  )
}

export default Prayer;
const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: '#cccccc',
        padding: 10,
        borderRadius: 20,
    },
});