import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import fitness from '../data/fitness'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FitnessCards = () => {
    const FitnessData = fitness;
    const navigation = useNavigation();
   
  return (
    <View>
        {FitnessData.map((item,key) => (
            <Pressable
            onPress={() => navigation.navigate("Workout",{
                image:item.image,
                excersises:item.excersises,
                id:item.id,
            })}
            style ={styles.imageClick} key={key}>
                <Image style={styles.image} source={{uri:item.image}}/>
                <Text style={styles.name}>{item.name}</Text>
                <MaterialCommunityIcons style ={styles.icon} name="lightning-bolt" size={24} color="black" />
            </Pressable>
        ))}
    </View>
  )
}

export default FitnessCards;

const styles = StyleSheet.create({
    image : {
        width: "95%",
        height: 140,
        borderRadius : 7,
        marginLeft : 10
        
    },
    imageClick : {
        alignContent: "center",
        justifyContent: "center",
        margin:10,

    },
    name:{
        position : "absolute",
        color:"#fff",
        fontSize : 16,
        fontWeight : "bold",
        top : 20,
        left : 20

    },
    icon : {
        position : "absolute",
        color:"#fff",
        bottom : 15,
        left: 20
    }
})