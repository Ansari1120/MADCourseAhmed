import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Task_Two from "./components/task_02";
import Task_One from "./components/task_01";
import Task_Three from "./components/task_03";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lab 01 tasks</Text>
      <Task_One />
      <Task_Two />
      <Task_Three n={19} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
