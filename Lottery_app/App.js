import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

export default function App() {
  const [result, setResult] = useState(0);
  const [guess, setGuess] = useState("");
  const [bet, setBet] = useState("");
  const [won, setWon] = useState("");

  const generateNumber = () => {
    const generatedNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    setResult(generatedNumber);

    const guessNumber = parseInt(guess);
    const betAmount = parseInt(bet);

    if (guessNumber === generatedNumber) {
      const winnings = betAmount * 100;
      setWon("Congratulations, You have won! ₱${winnings}");
    } else {
      setWon("You guessed wrong. The number was ${generatedNumber}. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Lottery App</Text>
      <Text style={styles.result}>{won}</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={(text) => setGuess(text)}
        placeholder="Enter your 3-digit number combination here..."
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textinput}
        onChangeText={(text) => setBet(text)}
        placeholder="Enter your bet amount here..."
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={generateNumber}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkturquoise",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: "#5DE2E7",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    marginTop: 50,
    top: 5,
  },
  result: {
    fontSize: 18,
    color: "white",
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: "#5DE2E7",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    marginBottom: 60,
  },
  textinput: {
    fontSize: 14,
    fontStyle: "italic",
    color: "black",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#5DE2E7",
    marginBottom: 20,
    bottom: -5,
    width: "100%",
  },
  button: {
    backgroundColor: "#5DE2E7",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontStyle: "italic",
    color: "white",
    fontWeight: "bold",
  },
});