import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Modal, Image } from 'react-native';
// My chosen external npm
import * as Speech from 'expo-speech';
const App = () => {
  const [advice, setAdvice] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.tagline}>Tap how you feel!</Text>
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
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text style={styles.adviceText}>{advice}</Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={styles.closeText}>Close</Text>
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

  tagline: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 20,
    fontStyle: 'italic',
    fontWeight: 500,
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
  logo: {
    width: 250,
    height: 250,
    marginBottom: 5,
  },


// Modal popup styling
modalBackground: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
},
modalContent: {
  backgroundColor: '#fff',
  padding: 20,
  borderRadius: 8,
  width: 260,
  alignItems: 'center',
},
adviceText: {
  fontSize: 18,
  textAlign: 'center',
  marginBottom: 10,
  fontFamily: 'Arial',
},
closeText: {
  fontSize: 16,
  fontWeight: 'bold',
  fontFamily: 'Arial',
},


});

export default App;
