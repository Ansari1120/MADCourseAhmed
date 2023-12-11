import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const Task_One = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task 01</Text>

      <FlatList
        data={numbers}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3} // Display 3 items per row
      />
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
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    margin: 5, // Adjust margin for spacing between items
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
});

export default Task_One;
