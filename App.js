import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Modal, Image, TextInput, Button, Switch } from 'react-native';
// My chosen external npm
import * as Speech from 'expo-speech';
const App = () => {
  const [advice, setAdvice] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [userNote, setUserNote] = useState('');
  const [noteLog, setNoteLog] = useState([]);
  const [privateMode, setPrivateMode] = useState(false);
  const moods = [
    { emoji: '😊', advice: 'Keep smiling. It looks good on you.' },
    { emoji: '😢', advice: 'Let it out. You are allowed to feel this way.' },
    { emoji: '😠', advice: 'Take a breath. Anger passes.' },
    { emoji: '😰', advice: 'You are safe. This feeling will fade.' },
    { emoji: '😴', advice: 'Maybe a nap would help.' },
    { emoji: '🤔', advice: 'Pause and reflect. You’ve got this.' },
    { emoji: '🥳', advice: 'Celebrate the little wins!' },
    { emoji: '😎', advice: 'You are cool, calm, and collected.' },
    { emoji: '😭', advice: 'Tears are just emotions leaving your body.' },
  ];

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.tagline}>Tap how you feel!</Text>

      {/* Pressing emoji with text and speech */}
{/* Emoji grid */}
<View style={styles.emojiGrid}>
  {moods.map((mood, index) => (
    <Pressable
      key={index}
      onPress={() => {
        setAdvice(mood.advice);
        setModalVisible(true);
        Speech.speak(mood.advice);
      }}
    >
      <View style={styles.emojiBox}>
        <Text style={styles.emoji}>{mood.emoji}</Text>
      </View>
    </Pressable>
  ))}
</View>

          {/* Modal pop up after you tap an emoji */}
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


    <View style={styles.switchContainer}>
  <Text style={styles.switchLabel}>Private Mode (Hides Notes)</Text>
  <Switch
    value={privateMode}
    onValueChange={setPrivateMode}
  />
</View>
    <TextInput
        style={styles.textInput}
        placeholder="Write how you feel..."
        value={userNote}
        onChangeText={setUserNote}
      />
    <Button
      title="Log Note"
      onPress={() => {
        if (userNote.trim() !== '') {
          setNoteLog([...noteLog, userNote]);
          setUserNote('');
        }
      }}
    />
    {/* Private mode wrapping saved notes section */}
{!privateMode && (
  <View style={styles.savedNoteContainer}>
    <Text style={styles.savedNoteLabel}>Saved Notes:</Text>
    {/* using mapping to go through array */}
    {noteLog.map((note, index) => (
      <Text key={index} style={styles.savedNote}>• {note}</Text>
    ))}
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

  tagline: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 20,
    fontStyle: 'italic',
    fontWeight: 500,
  },
  

  emojiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    width: 370, // 👈 forces it to wrap into 3 per row (3 boxes * 80px + 3 gaps)
  },
  
  
  

  emojiBox: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8, // 👈 adds space around each box
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
  textInput: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    padding: 10,
    width: '80%',
    marginTop: 20,
    fontFamily: 'Arial',
    marginBottom: 10,
  },

  savedNoteLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    fontFamily: 'Arial',
  },

  savedNote: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    fontFamily: 'Arial',
  },

  // Private mode switch
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    gap: 10, 
    marginBottom: -20,
  },
  switchLabel: {
    fontSize: 16,
    fontFamily: 'Arial',
  },

});

export default App;
