import { createDrawerNavigator } from '@react-navigation/drawer';
import { Header, Icon } from 'react-native-elements';
import {StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import { SafeAreaView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  ImageBackground,
  View, 
  Image,} from 'react-native';

   const HomePage = () => {
    const handleSignIn = () => {
      console.log('Sign In');
      //Navigation to signin screen
    };

    const handleSignUp = () => {
      console.log('Sign Up');
      //Navigate to the signup page
    };

    

    const toggleDrawer = () => {
      navigation.toggleDrawer();
    };
    
  
    return (
      
      
      <SafeAreaView style={styles.container}>
        <Header
        rightComponent={<Icon 
          name="menu"
          type="material"
          color="#fff"
          onPress={toggleDrawer}/>}
        leftComponent={{ text: 'Entrack', style: { color: '#fff', fontSize: 18 } }}
        backgroundColor="#000"
      />
      
        
        <ImageBackground source={{ uri: 'https://unsplash.com/photos/oEIFOoC3gi0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dHJhaW5zJTIwaW4lMjBtb3VudGFpbnN8ZW58MHx8fHwxNjgxODc4NTM5&force=true&w=2400' }} style={styles.imageBackground} resizeMode="cover">
          <Image source={{ uri: 'https://your-logo-url.com/path/to/logo.png' }} style={styles.logo} /> 
          <Text style={styles.title}>Welcome to Entrack</Text>
          <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            </View>
         </ImageBackground>
         <View style={{
              backgroundColor: '#000',
              height: 70,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
               }}
              ><Text style={{ color: '#fff', fontSize: 12 }}>{'\u00A9'} {(new Date()).getFullYear()} Entrack. All rights reserved.</Text> 
              </View>
        
          </SafeAreaView>
      
    );
  };
  const Drawer = createDrawerNavigator();

  const App = () => {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          < Drawer.Screen name="Home" component={HomePage} />
          {/* Add more screens here if needed */}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  };




  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    topBar: {
      backgroundColor: '#000',
      height: 70,
      width: '100%',
    },
    bottomBar: {
      backgroundColor: '#000',
      height: 50,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    copyrightText: {
      color: '#FFF',
      fontSize: 12,
    },
    container: {
      flex: 1,
    },
      imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      logo: {
        width: 100,
        heigth: 100,
        marginBottom: 20,
      },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#FFF',
    },
    buttonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    button: {
      backgroundColor: '#007bff',
      borderRadius: 5,
      padding: 10,
      paddingHorizontal: 20,
    },
    signInButton: {
      marginRight: 10,
    },

    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '600',
    },
  });

  export default HomePage;
