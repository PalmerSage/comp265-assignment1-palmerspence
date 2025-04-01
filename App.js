import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Palmoji</Text>

      <View style={styles.emojiBox}>
        <Text style={styles.emoji}>😊</Text>
      </View>
    </ScrollView>
    
  
  );
};

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  // App Title obvi
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  // Box with emoji in it
  emojiBox: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  // Emoji size
  emoji: {
    fontSize: 32,
  },



});

export default App;
