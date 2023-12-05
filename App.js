import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, PermissionsAndroid } from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';

export default function App() {
  const [region, setRegion] = useState({
    latitude: -14.2350, 
    longitude: -51.9253, 
    latitudeDelta: 60,
    longitudeDelta: 60,
  });

  const wonders = [
    {
      name: 'Cristo Redentor',
      country: 'Brazil',
      coordinates: { latitude: -22.9519, longitude: -43.1658 },
    },
    {
      name: 'Machu Picchu',
      country: 'Peru',
      coordinates: { latitude: -13.1631, longitude: -72.5450 },
    },
    {
      name: 'Chichén Itzá',
      country: 'Mexico',
      coordinates: { latitude: 20.6830, longitude: -88.5713 },
    },
    {
      name: 'Coliseu',
      country: 'Italy',
      coordinates: { latitude: 41.8902, longitude: 12.4922 },
    },
    {
      name: 'Ruínas de Petra',
      country: 'Jordan',
      coordinates: { latitude: 30.3285, longitude: 35.4428 },
    },
    {
      name: 'Taj Mahal',
      country: 'India',
      coordinates: { latitude: 27.1750, longitude: 78.0422 },
    },
    {
      name: 'Muralha da China',
      country: 'China',
      coordinates: { latitude: 40.4319, longitude: 116.5704 },
    },
  ];


  const moveToWonder = (coordinates) => {
    setRegion({ ...region, ...coordinates });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>SeteMaras</Text>
      <MapView style={styles.map} region={region}>
        {wonders.map((wonder, index) => (
          <Marker
            key={index}
            coordinate={wonder.coordinates}
            title={wonder.name}
            description={wonder.country}
          />
        ))}
      </MapView>


      <View style={styles.buttonContainer}>
        {wonders.map((wonder, index) => (
          <Button
            key={index}
            title={`${wonder.name}`}
            buttonStyle={styles.button}
            onPress={() => moveToWonder(wonder.coordinates)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120, 
    marginBottom: 100, 
    backgroundColor: 'darkslategrey'
  },
  textContainer: {
    fontSize: 45,
    color: 'white'
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    margin: 5,
    backgroundColor: 'blue',
  },
});
