import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Task_Two = () => {
  const text = "Ahmed Ali Ansari MAD Course Student";

  const Item = () => {
    const textArray = [];
    for (let i = 0; i < 5; i++) {
      textArray.push(
        <Text key={i} style={styles.text}>
          {text}
        </Text>
      );
    }
    return textArray;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task 02</Text>
      {Item()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    marginBottom: 60,
  },
  text: {
    fontSize: 24,
  },
});

export default Task_Two;
