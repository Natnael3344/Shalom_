import { useNavigation } from '@react-navigation/native';
import { View } from 'native-base';
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const LyricsDetailScreen = ({ route }) => {
    const { lyric, title } = route.params;
    const navigation = useNavigation();
    React.useLayoutEffect(() => {
        navigation.setOptions({ title });
      }, [navigation, title]);
    return (
        <View style={{backgroundColor:'white',paddingHorizontal:10,alignItems:'center'}}>
            <View style={styles.buttonContainer}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.title}>{'Tempo : '}{lyric.tempo}</Text>
                <Text style={styles.title}>{'Style : '}{lyric.style}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.title}>{'Chord : '}{lyric.chord}</Text>
                <Text style={styles.title}>{'Transpose : '}{lyric.transpose}</Text>
                </View>
            </View>   
        <ScrollView contentContainerStyle={styles.container}>             
            {parseLyrics(lyric.content)}
            <Text>{'\n\n'}</Text>
        </ScrollView>
        </View>
        
    );
};

const parseLyrics = (content) => {
    // Split the content into lines based on the separator 'aaa'
    const lines = content.split('a');
    // Map each line to a <Text> component with appropriate styling
    return lines.map((line, index) => {
        // Check if the line ends with 'n'
        const endsWithN = line.trim().endsWith('n');
        console.log(endsWithN);
        // Add two new lines if the line ends with 'n'
        const modifiedLine = endsWithN ? `${line.split('n').join("")+'\n'}` : line;
        return (
            <Text key={index} style={styles.lyricLine}>
                {modifiedLine}
            </Text>
        );
    });
};


const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        backgroundColor:'white',
        alignContent:'center'
        
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight:'bold',
        color:'white'
    },
    lyricLine: {
        fontSize: 17,
        fontWeight:'bold',
        marginBottom: 5,
        color:'black',
        lineHeight: 30,
    },
    buttonContainer: {
        backgroundColor: '#674fa3', // You can customize the color
        borderRadius: 40, // You can adjust the border radius as per your preference
        paddingVertical: 20,
        margin: 5,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10, 
        paddingHorizontal:20
      },
});

export default LyricsDetailScreen;
