import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import zpApi from '../../api/Api';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');
const AVATAR_SIZE = (width - 32) / 2 - 20;





const KeyExtractor = (item) => item.title;

const MembersList = () => {
    const [members, setMembers] = useState([]);
    const [member, setMember] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const membersData = await zpApi.getMembers(); 
                setMembers(membersData);
                console.log("Members",membersData)
            } catch (error) {
                console.error('Error fetching members list:', error);
            }
        };
        const fetchMember = async () => {
            try {
                const memberData = await zpApi.getMembersDetail(); 
                setMember(memberData);
                console.log("Member",memberData)
            } catch (error) {
                console.error('Error fetching member detail:', error);
            }
        };
        fetchMembers();
        fetchMember();
    }, []);
    const handleMemberPress = (selectedMember) => {
        const matchingMember = member.find(mem => mem.name === selectedMember.title);
        if (matchingMember) {
            navigation.navigate('member', { member: matchingMember,imageUri: selectedMember.url});
        } else {
            console.warn('No matching member found');
        }
    };
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} key={item.title} onPress={() => handleMemberPress(item)}>
          <Image source={{ uri: item.url }} style={styles.avatar} />
          <Text style={styles.name}>{item.title}</Text>
        </TouchableOpacity>
      );
  return (
    <View style={styles.container}>
   <FlatList
      data={members}
      renderItem={renderItem}
      keyExtractor={KeyExtractor}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      scrollEnabled={true}
      
    /> 
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
      },
    listContainer: {
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom:16
    },
    itemContainer: {
      flex: 1,
      alignItems: 'center',
      margin: 8,
    },
    avatar: {
      width: AVATAR_SIZE,
      height: AVATAR_SIZE,
      borderRadius: AVATAR_SIZE / 2,
    },
    name: {
      marginTop: 8,
      fontSize: 16,
      color:'#674fa3',
      fontWeight:'bold'
    },
  });
export default MembersList;