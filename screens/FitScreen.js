import { StyleSheet, Text, View,SafeAreaView,Image,Pressable } from 'react-native'
import React, {useState,useContext} from 'react'
import { NavigationContainer, useNavigation,useRoute } from '@react-navigation/native';
import { FitnessItems } from '../Context';


const FitScreen = () => {
    const route = useRoute();
    //console.log(route.params);
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const excersise = route.params.excersises;
    const current = excersise[index];
    //console.log(current, "first excersise");
    const {completed,setCompleted,workout,setWorkout,minutes,setMinutes,calories,setCalories} = useContext(FitnessItems);
    console.log(completed,"completed excersise");

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{uri:current.image}}/>

      <Text style={styles.name}>{current.name}</Text>

      <Text style={styles.set}>x{current.sets}</Text>

      {index + 1 >= excersise.length ? (
         <Pressable
         onPress={() => { 
           navigation.navigate("Home");
         }}
         style={styles.brButton}>
           <Text style={styles.button}>DONE</Text>
         </Pressable>

      ) : (
        <Pressable
        onPress={() => {
          navigation.navigate("Rest"); 
          setCompleted([...completed,current.name]);
          setWorkout(workout+1);
          setMinutes(minutes+2.5);
          setCalories(calories+6.3);
          setTimeout(() =>{
            setIndex(index + 1);
          },2000)
        }}
        style={styles.brButton}>
          <Text style={styles.button}>DONE</Text>
        </Pressable>

      )}

     
  <Pressable style={styles.brbPrevSkip}>
      <Pressable 
      disabled={index === 0}
      onPress={() => {
   
        setTimeout(() => {
          setIndex(index - 1);
        });
      }}
      style={styles.brbPrev}>
        <Text style={styles.bPrev}>PREV</Text>
      </Pressable>
      {index + 1 >= excersise.length ? (
         <Pressable 
         onPress={() => { 
          navigation.navigate("Home");
        }}
         style={styles.brbPrev}>
         <Text style={styles.bPrev}>SKIP</Text>
       </Pressable>
      ) : (
        <Pressable 
        onPress={() => {        
          setTimeout(() =>{
            setIndex(index + 1);
          })  
        }}
        style={styles.brbPrev}>
        <Text style={styles.bPrev}>SKIP</Text>
      </Pressable>
      )}

     
      </Pressable>
    </SafeAreaView>
  )
}

export default FitScreen

const styles = StyleSheet.create({
    container:{
        marginTop:50,

    },
    image: {
        width: '100%',
        height: 370,
    },
    name:{ 
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft:"auto",
        marginRight:"auto",
        marginTop: 30,
    },
    set:{
        fontSize: 38,
        fontWeight: 'bold',
        marginLeft:"auto",
        marginRight:"auto",
        marginTop: 30,
    },
    brButton:{
        backgroundColor:"blue",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop: 20,
        borderRadius: 20,
        padding: 10,
        width:150,

    },
    button :{
        textAlign : "center",
        fontWeight:"bold",
        fontSize : 20,
        color : "white",
    },
    brbPrevSkip:{
      flexDirection: "row",
      alignItems: "center",
      marginLeft:"auto",
      marginRight:"auto",
      marginTop : 50,
     

    },
    brbPrev:{
      backgroundColor:"green",
      padding : 10,
      borderRadius: 20,
      marginHorizontal : 20,
      width:100,
    },
    bPrev :{
          color : "white",
          fontWeight : "bold",
          fontSize : 15,
          textAlign : 'center',
        },


})