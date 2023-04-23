import React, { useState } from 'react';
import { Header, Icon } from 'react-native-elements';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, ImageBackground, View, Image, ScrollView } from 'react-native';

const HomePage = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleRouteSelection = (route) => {
    setSelectedRoute(route);
  };

  const trainRoutes = [
    { id: 1, name: 'New Orleans' },
    { id: 2, name: 'Hammond' },
    { id: 3, name: 'Baton Rouge' },
    { id: 4, name: 'Lake Charles' },
    { id: 5, name: 'Monroe' },
    // Add more train routes if needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        rightComponent={<Icon name="menu" type="material" color="#fff" onPress={() => {}} />}
        leftComponent={{ text: 'Entrack', style: { color: '#fff', fontSize: 18 } }}
        backgroundColor="#000"
      />
      <ImageBackground
        source={{
          uri:
            'https://images.unsplash.com/photo-1496850574977-a4607106a874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <Text style={styles.title}>Choose a Destination</Text>
        <ScrollView style={styles.routesContainer}>
          {trainRoutes.map((route) => (
            <TouchableOpacity key={route.id} style={styles.routeCard} onPress={() => handleRouteSelection(route)}>
              <Text style={styles.routeName}>{route.name}</Text>
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
    justifyContent: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  routeName: {
    fontSize: 20,
    marginRight: 10,
    fontweight: 'bold',
    color: '#fff',
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

