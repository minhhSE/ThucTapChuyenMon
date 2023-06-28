import { StyleSheet, Text, View,SafeAreaView,Image,ScrollView } from 'react-native'
import React,{useContext} from 'react'
import FitnessCards from '../components/FitnessCards'
import { FitnessItems } from '../Context'

const HomeScreen = () => {
    const {workout,minutes,calories} = useContext(FitnessItems);
  return (
    <ScrollView style = {{marginTop : 50}}>
       
        <View style={styles.container}>
            <Text style={styles.header}>HOME WORKOUT</Text>

            <View style={styles.belowHeader}>
               <View>
                <Text style={styles.belowHeaderNumber}>{workout}</Text>
                <Text style={styles.belowHeaderText}>WORKOUTS</Text>
               </View>
               <View>
               <Text style={styles.belowHeaderNumber}>{calories}</Text>
                <Text style={styles.belowHeaderText}>KCAL</Text>

               </View>
               <View>
               <Text style={styles.belowHeaderNumber}>{minutes}</Text>
                <Text style={styles.belowHeaderText}>MINS</Text>

               </View>
            </View>

            <View style={styles.imageBackGround}>
            <Image style={styles.image} source={{ 
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }} />
            </View>
           
           <FitnessCards/>
            
           </View>
          
           
          
           
    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#CD853F",
        padding : 10,
        height : "100%",
        width : "100%",
        marginTop : 20,

    },
    header : {
        color : "#fff",
        fontSize : 18,
        fontWeight : "bold",
        

    },
    belowHeader : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    belowHeaderNumber : {
        color : "#fff",
        fontWeight : "bold",
        textAlign : "center",
        fontSize : 18,
    },
    belowHeaderText : {
        color : "#D0D0D0",
        fontWeight : "bold",
        textAlign : "center",
        fontSize : 17,
        marginTop : 6,

    },
    image : {
        width: "90%", 
        height: 140, 
        marginTop: 20, 
        marginBottom : 5,
        borderRadius: 7
    },
    imageBackGround : {
        justifyContent : "center",
        alignItems : "center"

    },
})