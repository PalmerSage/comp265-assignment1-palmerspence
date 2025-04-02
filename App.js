import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Modal } from 'react-native';
// My chosen external npm
import * as Speech from 'expo-speech';
const App = () => {
  const [advice, setAdvice] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Palmoji</Text>
      <Pressable
          onPress={() => {
            setAdvice('Take a deep breath and enjoy the moment.');
            setModalVisible(true);
            Speech.speak('Take a deep breath and enjoy the moment.');
          }}
        >
      <View style={styles.emojiBox}>
        <Text style={styles.emoji}>😊</Text>
      </View>
    </Pressable>
    
    <Modal visible={modalVisible} transparent={true}>
      <View>
        <View>
          <Text>{advice}</Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>

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
// Modal Styling
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },


});

export default App;
