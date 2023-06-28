import { StyleSheet, Text, View,Image,SafeAreaView, Pressable,ScrollView} from 'react-native'
import React, {useContext} from 'react'
import { useNavigation,useRoute} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FitnessItems } from '../Context';
import { AntDesign } from '@expo/vector-icons';

const WorkoutScreen = () => {
    const route = useRoute();
   // console.log(route.params);
    const navigation = useNavigation();
    const {completed,setCompleted} = useContext(FitnessItems);
  
  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} style ={styles.container}>
       <Image style={styles.image} source={{uri:route.params.image}}/>
       <Ionicons 
       onPress={() => navigation.goBack()}
       style={styles.backIcon} name="arrow-back-outline" size={24} color="white" />

{route.params.excersises.map((item, index) => (
          <Pressable
            style={styles.pressable}
            key={index}
          >
            <Image
              style={styles.exercises}
              source={{ uri: item.image }}
            />
            <View style={styles.brpExercise}>
                <Text style={styles.nameExercise}>{item.name}</Text>

                <Text style={styles.repExercise}>x{item.sets}</Text>
            </View>

            {completed.includes(item.name) ? (
                <AntDesign style={styles.icon} name="checkcircle" size={24} color="green" />
            ): (
                null
            )}
           </Pressable>
        ))}
       
    </ScrollView>
    <Pressable 
     onPress={() =>{ 
        
        navigation.navigate("Fit",{
          excersises:route.params.excersises,
      })
      setCompleted([]);
    }}
  
    style={styles.brButton}> 
        <Text style={styles.button}>START</Text>
    </Pressable>
    </>

  )
}

export default WorkoutScreen

const styles = StyleSheet.create({
    container:{
       marginTop:50,
      backgroundColor:"#fff",
    },
    image: {
        width: '100%',
        height: 170,
        resizeMode: 'cover',
    },
    backIcon: {
            position: 'absolute',
            left: 10,
            top: 5,
            
        },
        exercises: {
            width: 90,
            height: 90,
           
        },
        pressable:{
            margin:10,
            flexDirection: "row",
            alignItems : "center"

        },
        brpExercise:{
            marginLeft: 10,

        },
        nameExercise :{
            fontSize:17,
            fontWeight : 'bold',
            width: 170,
        },
        repExercise : {
            marginTop:4,
            fontSize:17,
            color:"grey"

        },
        brButton:{
            backgroundColor:"blue",
            padding:10,
            marginLeft:"auto",
            marginRight:"auto",
            marginVertical:20,
            width:120,
            borderRadius:6,
                        
        },
        button:{
            color:"white",
            fontSize:15,
            fontWeight:"600",
            textAlign:"center",
           
        },
        icon:{
            marginLeft : 40,
        }
})