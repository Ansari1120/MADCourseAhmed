import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ParentProductList from "./Components/parentProductList";
import MyContext, { MyContextProvider } from "./config/MyContext";

export default function App() {
  return (
    <MyContextProvider>
      <View style={styles.container}>
        <ParentProductList />
      </View>
    </MyContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
