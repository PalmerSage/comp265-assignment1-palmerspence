import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Modal,
  Image,
  TextInput,
  Button,
  Switch,
} from 'react-native';

// speech stuff
import * as Speech from 'expo-speech';

const App = () => {
  // all the state stuff
  const [advice, setAdvice] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [userNote, setUserNote] = useState('');
  const [noteLog, setNoteLog] = useState([]);
  const [privateMode, setPrivateMode] = useState(false);

  // mood data - emoji and advice
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
      {/* logo at the top */}
      <Image source={require('./assets/logo.png')} style={styles.logo} />

      {/* tagline under logo */}
      <Text style={styles.tagline}>Tap how you feel!</Text>

      {/* grid of emoji buttons */}
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

      {/* advice popup modal */}
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

      {/* toggle for hiding notes */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Private Mode (Hides Notes)</Text>
        <Switch value={privateMode} onValueChange={setPrivateMode} />
      </View>

      {/* text box for journaling */}
      <TextInput
        style={styles.textInput}
        placeholder="Write how you feel..."
        value={userNote}
        onChangeText={setUserNote}
      />

      {/* log the note */}
      <Button
        title="Log Note"
        onPress={() => {
          if (userNote.trim() !== '') {
            setNoteLog([...noteLog, userNote]);
            setUserNote('');
          }
        }}
      />

      {/* saved notes (only if private mode is off) */}
      {!privateMode && (
        <View style={styles.savedNoteContainer}>
          <Text style={styles.savedNoteLabel}>Saved Notes:</Text>
          {noteLog.map((note, index) => (
            <Text key={index} style={styles.savedNote}>
              • {note}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // main screen layout
  container: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#fff3f3',
    flexGrow: 1,
  },

  // under logo
  tagline: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 20,
    fontStyle: 'italic',
    fontWeight: '500',
  },

  // grid for emoji buttons
  emojiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    width: 370,
  },

  // box around each emoji
  emojiBox: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    elevation: 3,
  },

  // size of the emoji
  emoji: {
    fontSize: 32,
  },

  // modal background (dark layer)
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },

  // box that pops up
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: 260,
    alignItems: 'center',
  },

  // the advice inside modal
  adviceText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Arial',
  },

  // close button text
  closeText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },

  // logo image
  logo: {
    width: 220,
    height: 220,
    marginBottom: -15,
  },

  // note input box
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

  // label above saved notes
  savedNoteLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    fontFamily: 'Arial',
  },

  // saved note text
  savedNote: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    fontFamily: 'Arial',
  },

  // toggle layout
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
    marginBottom: -20,
  },

  // label next to toggle
  switchLabel: {
    fontSize: 16,
    fontFamily: 'Arial',
  },
});

export default App;
