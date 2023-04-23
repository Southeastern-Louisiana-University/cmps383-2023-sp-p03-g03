import React, { useState } from 'react';

import { Header, Icon } from 'react-native-elements';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  Image,
  ScrollView, // Add this line
} from 'react-native';

const HomePage = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleRouteSelection = (route) => {
    setSelectedRoute(route);
  };

  const trainRoutes = [
    { id: 1, name: 'Route 1', price: '$300' },
    { id: 2, name: 'Route 2', price: '$400' },
    { id: 3, name: 'Route 3', price: '$500' },
    // Add more train routes if needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        rightComponent={
          <Icon name="menu" type="material" color="#fff" onPress={() => {}} /> // Add drawer functionality if needed
        }
        leftComponent={{ text: 'Entrack', style: { color: '#fff', fontSize: 18 } }}
        backgroundColor="#000"
      />
      <ImageBackground
        source={{ uri: 'https://unsplash.com/photos/oEIFOoC3gi0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dHJhaW5zJTIwaW4lMjBtb3VudGFpbnN8ZW58MHx8fHwxNjgxODc4NTM5&force=true&w=2400' }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <Text style={styles.title}>Choose a Train Route</Text>
        <ScrollView style={styles.routesContainer}>
          {trainRoutes.map((route) => (
            <TouchableOpacity key={route.id} style={styles.routeCard} onPress={() => handleRouteSelection(route)}>
              <Text style={styles.routeName}>{route.name}</Text>
              <Text style={styles.routePrice}>{route.price}</Text>
              {selectedRoute && selectedRoute.id === route.id && (
                <QRCode value={route.id.toString()} size={80} />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
        {selectedRoute && (
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buttonText}>Buy Ticket</Text>
          </TouchableOpacity>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};
  



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
  },
  routesContainer: {
    width: '100%',
  },
  routeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  routeName: {
    fontSize: 18,
    marginRight: 10,
  },
  routePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  buyButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});    

  export default HomePage;
