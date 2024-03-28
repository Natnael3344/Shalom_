import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ProgressBar } from 'react-native-paper';
import { Timestamp } from "firebase/firestore"
import Ionicons from 'react-native-vector-icons/Ionicons';
import zpApi from '../../api/Api';
const YearlyPlansScreen = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsData = await zpApi.getEvents(); // Fetch events using the zpApi class
                setEvents(eventsData);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();

    }, []);

    const calculateDaysRemaining = (date) => {
        let eventDate;
        
        // Check if the date is a valid object
        if (date && typeof date === 'object') {
            // Check if the date object has a valid time representation
            if (date.toDate && typeof date.toDate === 'function') {
                // Convert the date to a JavaScript Date object
                eventDate = date.toDate();
            } else if (date.seconds) {
                // Assuming date.seconds contains the seconds representation of the date
                eventDate = new Date(date.seconds * 1000);
            }
        }
    
        if (eventDate) {
            const currentDate = new Date();
            const differenceInTime = eventDate.getTime() - currentDate.getTime();
            const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
            return differenceInDays > 0 ? differenceInDays : 0; // Ensure positive value
        } else {
            return 0; // Handle missing or invalid date
        }
    };
    
    
    // Assuming eventsData is an array of events obtained from Firestore
    return (
        <View>
            {events.map((event, index) => (
                <ListItem key={index} bottomDivider>
                    <Ionicons name='calendar-number-outline' color='#674fa3' size={30} containerStyle={styles.iconContainer} />
                    <ListItem.Content>
                        <ListItem.Title style={{ fontWeight: 'bold' }}>{event.title}</ListItem.Title>
                        <ListItem.Subtitle>{calculateDaysRemaining(event.date)} days left</ListItem.Subtitle>
                        <ListItem.Subtitle>{new Date(event.date.seconds * 1000).toLocaleDateString()}</ListItem.Subtitle>
                        {/* Assuming event.date.seconds is the field containing seconds */}
                        <View style={styles.progressBarContainer}>
                            <ProgressBar progress={event.progress} style={{ width: Dimensions.get('window').width - 100, height: 15, borderRadius: 15 }} />
                            <Text style={{ color: 'black' }}>{event.progress * 100}% Complete</Text>
                        </View>
                    </ListItem.Content>
                </ListItem>
            ))}
        </View>
    );
};


const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: '#cccccc',
        padding: 10,
        borderRadius: 20,
    },
    progressBarContainer: {
        marginTop: 10,
    },
});

export default YearlyPlansScreen;
