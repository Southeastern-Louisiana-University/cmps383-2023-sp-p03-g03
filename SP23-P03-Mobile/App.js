import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import React, {userState, useEffect} from 'react' ;
import { SafeAreaView, 
  StyleSheet, 
  Text, 
  View, 
   } from 'react-native';

   const HomePage = () => {
    const handleStartTrip = () => {
      console.log('Starting trip today');
      // Navigate to the trip creation or selection screen
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome to Trip App</Text>
        <TouchableOpacity style={styles.button} onPress={handleStartTrip}>
          <Text style={styles.buttonText}>Start a Trip Today</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#007bff',
      borderRadius: 5,
      padding: 10,
      paddingHorizontal: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '600',
    },
  });

  export default HomePage;
