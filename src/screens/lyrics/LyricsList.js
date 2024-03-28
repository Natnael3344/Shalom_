import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import zpApi from '../../api/Api';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from 'react-native-elements';

const LyricsList = ({ style }) => {
    const [lyrics, setLyrics] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchLyrics = async () => {
            try {
                const lyricsData = await zpApi.getLyrics();
                if (style === 'all') {
                    setLyrics(lyricsData);
                }else{
                    const filteredLyrics = lyricsData.filter(item => item.style === style);
                    setLyrics(filteredLyrics);
                }
            } catch (error) {
                console.error('Error fetching lyrics:', error);
            }
        };

        fetchLyrics();
    }, [style]);

    const handleLyricPress = (lyric) => {
        navigation.navigate('detail', { lyric, title: lyric.head });
    };

    return (
        <View style={{ backgroundColor: 'black' }}>
            {lyrics.map((item, index) => (
                <ListItem key={index} onPress={() => handleLyricPress(item)} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title style={{ fontWeight: 'bold' }}>{item.title}</ListItem.Title>
                        <ListItem.Subtitle>{item.head} - {item.chord} - {item.tempo}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            ))}
        </View>
    );
}

export default LyricsList;
