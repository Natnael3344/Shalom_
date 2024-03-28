import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const MembersDetail = ({ route }) => {
    const { member,imageUri} = route.params;
    const navigation = useNavigation();
    // React.useLayoutEffect(() => {
    //     navigation.setOptions({ title });
    //   }, [navigation, title]);
    return (
        <View style={styles.container}>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.info}>Marital Status: {member.martial}</Text>
            <Text style={styles.info}>Address: {member.address}</Text>
            <Text style={styles.info}>Contact Number: {member.number}</Text>
          </View>
        </View>
      );
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 100,
      marginBottom: 20,
    },
    detailsContainer: {
      alignItems: 'center',
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color:'black'
    },
    info: {
      fontSize: 16,
      marginBottom: 5,
      color:'black'
    },
  });
export default MembersDetail