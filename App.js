import { StyleSheet,View, Text, ScrollView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';
import { FitnessConText } from './Context';

export default function App() {
  return (
    <FitnessConText><StackNavigator/></FitnessConText>
    
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#",

  },
})
