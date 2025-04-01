import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';

const App = () => {
  const [advice, setAdvice] = useState('');

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Palmoji</Text>
     <Pressable onPress={() => setAdvice('Take a deep breath and enjoy the moment.')}>
      <View style={styles.emojiBox}>
        <Text style={styles.emoji}>😊</Text>
      </View>
    </Pressable>
    
    
    {advice !== '' && (
      <View style={styles.adviceBox}>
        <Text>{advice}</Text>
      </View>
    )}


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
