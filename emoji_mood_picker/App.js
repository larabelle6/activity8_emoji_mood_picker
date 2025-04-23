import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {
 const [mood, setMood] = useState("😑");

 return (
    <View style={styles.container}>
      <Text style={styles.displayEmoji}>{mood}</Text>
      <Text style={styles.displayText}>MOOD</Text>
      <TouchableOpacity style={styles.button} onPress={() => setMood("😂")}>
        <Text style={styles.buttonText}>😀 Happy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setMood("😔")}>
        <Text style={styles.buttonText}>☹️ Sad</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setMood("😄")}> 
        <Text style={styles.buttonText}>😄 Excited</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 40,
    width: 300,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white'
  },
  displayEmoji: {
    fontSize: 50,
  },
  displayText: {
    fontSize: 20,
    marginBottom: 40,
  }
});
