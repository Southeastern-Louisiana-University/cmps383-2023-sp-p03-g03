import React, { useState } from 'react';
import { Header, Icon } from 'react-native-elements';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, ImageBackground, View, ScrollView } from 'react-native';

const App = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [showRouteOptions, setShowRouteOptions] = useState(false);
  const [showPurchaseConfirmation, setShowPurchaseConfirmation] = useState(false);

  const handleDestinationSelection = (destination) => {
    setSelectedDestination(destination);
    setShowRouteOptions(true);
  };

  const handleBack = () => {
    setShowRouteOptions(false);
  };

  const handleOptionSelection = () => {
    setShowRouteOptions(false);
    setShowPurchaseConfirmation(true);
  };

  const handleBackToHomePage = () => {
    setShowPurchaseConfirmation(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {!showRouteOptions && !showPurchaseConfirmation ? (
        <HomePage onDestinationSelect={handleDestinationSelection} />
      ) : showRouteOptions ? (
        <>
          <TouchableOpacity onPress={handleBack}>
            <Text style={styles.backButton}>Back</Text>
          </TouchableOpacity>
          <RouteOptions destination={selectedDestination} onOptionSelected={handleOptionSelection} />
        </>
      ) : (
        <>
          <TouchableOpacity onPress={handleBackToHomePage}>
            <Text style={styles.backButton}>Back</Text>
          </TouchableOpacity>
          <PurchaseConfirmation />
        </>
      )}
    </SafeAreaView>
  );
};

const HomePage = ({ onDestinationSelect }) => {
  const destinations = [
    { id: 1, name: 'New Orleans' },
    { id: 2, name: 'Hammond' },
    { id: 3, name: 'Baton Rouge' },
    
    // Add more train routes if needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        rightComponent={<Icon name="menu" type="material" color="#000" onPress={() => {}} />}
        leftComponent={{ text: 'Entrack', style: { color: '#000', fontSize: 18 } }}
        backgroundColor="#a5b4fc"
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
        <ScrollView style={styles.destinationsContainer}>
          {destinations.map((destination) => (
            <TouchableOpacity key={destination.id} style={styles.destinationCard} onPress={() => onDestinationSelect(destination)}>
              <Text style={styles.destinationName}>{destination.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const RouteOptions = ({ destination, onOptionSelected }) => {
  const options = [
    { id: 1, name: 'Hammond to New Orleans', price: '$300' },
    { id: 2, name: 'Baton Rouge to New Orleans', price: '$400' },
  ];

  return (
    <>
      <Header
        rightComponent={<Icon name="menu" type="material" color="#000" onPress={() => {}} />}
        leftComponent={{ icon: 'arrow-back', color: '#000' }}
        centerComponent={{ text: 'Entrack', style: { color: '#000', fontSize: 18 } }}
        backgroundColor="#a5b4fc"
      />
      <ImageBackground
        source={{
          uri:
            'https://images.unsplash.com/photo-1614108976759-57ac1d43b3f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <Text style={styles.title}>Route Options for {destination.name}</Text>
        <ScrollView style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity key={option.id} style={styles.optionCard} onPress={onOptionSelected}>
              <Text style={styles.optionName}>{option.name}</Text>
              <Text style={styles.optionPrice}>{option.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ImageBackground>
    </>
  );
};



const PurchaseConfirmation = () => {
  return (
    <ImageBackground
      source={{
        uri:
          'https://images.unsplash.com/photo-1532105956626-9569c03602f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      }}
      style={styles.confirmationContainer}
      resizeMode="cover"
    >
      <Header
        centerComponent={{ text: 'Entrack', style: { color: '#000', fontSize: 18 } }}
        backgroundColor="#a5b4fc"
      />
      <View style={styles.confirmationTextContainer}>
        <Text style={styles.confirmationText}>Thank you for your purchase!</Text>
      </View>
    </ImageBackground>
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
  destinationsContainer: {
  width: '100%',
  },
  destinationCard: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 10,
  padding: 10,
  backgroundColor: '#a5b4fc', //#0000FF
  width: '100%',
  },
  destinationName: {
  fontSize: 20,
  marginRight: 10,
  fontWeight: 'bold',
  color: '#000',
  },
  backButton: {
  fontSize: 18,
  fontWeight: '600',
  color: '#000',
  alignSelf: 'flex-start',
  marginLeft: 20,
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


  //RouteOptions styles
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
  optionsContainer: {
    width: '100%',
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#a5b4fc', // Make buttons visible with 70% opacity rgba(0, 0, 255, 0.7)
    width: '100%',
  },
  optionName: {
    fontSize: 20,
    marginRight: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  optionPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  //Confirmation page
  confirmationContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmationTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmationText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  
  
  });
  
  export default App;

