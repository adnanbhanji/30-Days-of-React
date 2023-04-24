import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";

export default function App() {
  const [subtitle, setSubtitle] = useState("This is the initial text."); // initialize state for the subtitle
  const [userInput, setUserInput] = useState(""); // initialize state for the user input

  const changeText = () => {
    // define a function to change the subtitle
    setSubtitle("Text has changed!");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Hello, React Native!</Text>
      <Text style={styles.title}>React Challenge - Day 27</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {/* display the subtitle state  */}
      <Button title="Click for a surprise" onPress={changeText} />
      {/* display a button to change the subtitle  */}
      <Image
        source={{
          uri: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}
        style={styles.image}
      />
      <Text>{"\n\n"}</Text>
      <TextInput
        onChangeText={(text) => setUserInput(text)} // update the userInput state on input change
        value={userInput} // set the value of the input to the userInput state
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 300,
    marginTop: 16,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
  },
});

// React Native is a framework that allows developers to build mobile applications
// using the same declarative syntax of React. One of the main differences between
// React and React Native is the set of components used to build UI elements. In React,
// web-specific elements like div, span, and h1 can be used, while in React Native, specific
// components like View, Text, and Image are used to create the mobile interface. Additionally,
// React Native relies on native components rather than web components, which provides a more
// natural user interface on mobile devices. Another difference is the use of stylesheets. In
// React Native, styles are defined using a StyleSheet object and specific style properties,
// like height and width, are defined using percentage values rather than pixels. Finally,
// React Native applications are built using native code, while React web applications are
// built using HTML, CSS, and JavaScript. This means that the application architecture, platform-specific
// behaviors, and performance can differ between React and React Native applications.
