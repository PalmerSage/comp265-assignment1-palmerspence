import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  const [unit, setUnit] = useState('C');
  const [selectedCity, setSelectedCity] = useState('Saskatoon');

  const weatherData = [
    { city: 'Saskatoon', temperatureC: 22, condition: 'Sunny' },
    { city: 'Regina', temperatureC: 19, condition: 'Cloudy' },
    { city: 'Prince Albert', temperatureC: 16, condition: 'Rainy' },
  ];

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
  };

  const convertTemperature = (tempC) => {
    return unit === 'C' ? tempC : (tempC * 9) / 5 + 32;
  };

  const selectedWeather = weatherData.find((data) => data.city === selectedCity);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Palmer’s Badass Weather App</Text>

      <View style={styles.toggleButton}>
        <Button
          title={`Toggle to ${unit === 'C' ? 'Fahrenheit' : 'Celsius'}`}
          onPress={toggleUnit}
          color="#d40000" 
        />
      </View>

      <View style={styles.selectorContainer}>
        <Text style={styles.label}>Select a city:</Text>
        <Picker
          selectedValue={selectedCity}
          onValueChange={(itemValue) => setSelectedCity(itemValue)}
          style={styles.selector}
        >
          {weatherData.map((data, index) => (
            <Picker.Item key={index} label={data.city} value={data.city} />
          ))}
        </Picker>
      </View>

      {selectedWeather ? (
        <View style={styles.weatherCard}>
          <Text style={styles.city}>{selectedWeather.city}</Text>
          <Text style={styles.condition}>{selectedWeather.condition}</Text>
          <Text style={styles.temperature}>
            {convertTemperature(selectedWeather.temperatureC).toFixed(1)}°{unit}
          </Text>
        </View>
      ) : (
        <Text style={styles.loading}>No weather data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#faecec', 
    flex: 1,
  },
  header: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#d40000', 
    textAlign: 'center',
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  selectorContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  selector: {
    padding: 5,
    fontSize: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  weatherCard: {
    borderWidth: 1,
    borderColor: '#d40000',
    borderRadius: 5,
    padding: 15,
    marginVertical: 10,
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#fff7cc', 
  },
  city: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#d40000',
  },
  condition: {
    fontSize: 16,
    color: '#555',
  },
  temperature: {
    fontSize: 17,
    color: '#d40000',
    fontWeight: 'bold',
  },
  loading: {
    fontSize: 16,
    color: '#999',
  },
});

export default App;
