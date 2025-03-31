import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Palmoji</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default App;
