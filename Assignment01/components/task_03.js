import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const Task_Three = ({ n }) => {
  const Item = () => {
    let sum;
    if (!isNaN(n) && n > 0) {
      sum = (n * (n + 1)) / 2;
    } else {
      console.log("it is not a number or number is less then 0");
    }
    return sum;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task 03</Text>
      <Text>{Item()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
});

export default Task_Three;
