import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const [credentials, setCredentials] = useState({});
  const [visible, setVisible] = useState(true);

  const postLogin = () => {
    if (!credentials.username) {
      Alert.alert("Login Form", "Plase fill username field first", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    if (!credentials.password) {
      Alert.alert("Login Form", "Plase fill password field first", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    if (!credentials.username) {
      Alert.alert("Login Form", "Plase fill username field first", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: "https://img.freepik.com/free-vector/gradient-connection-background_23-2150519273.jpg?w=740&t=st=1704033149~exp=1704033749~hmac=610f489c9bd6d0b4739712ec4a860e28374b31b2a6e488728caf3c606535f825",
        }}
      >
        <View style={{ flex: 2, margin: 15, padding: 5, top: 40 }}>
          <View style={styles.flexRow}>
            <Ionicons name="arrow-back" size={24} color="white" />
            <Text style={styles.tagLine}>Go Back</Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subTitle}>
              welcome back there ! lets get back to the procedings where you
              left off.
            </Text>
          </View>
        </View>

        <View style={styles.body}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.flexRow}>
            <Ionicons name="person" size={16} color="white" />
            <TextInput
              placeholderTextColor={"#c9c9c9"}
              placeholder="enter your user name"
              style={styles.textInput}
              value={credentials.email}
              onChangeText={(e) =>
                setCredentials({ ...credentials, username: e })
              }
            />
            <Ionicons name="checkmark-done" size={16} color="white" />
          </View>

          <Text style={[styles.label, { marginTop: 15 }]}>Password</Text>
          <View style={styles.flexRow}>
            <Ionicons name="lock-closed" size={16} color="white" />
            <TextInput
              placeholderTextColor={"#c9c9c9"}
              placeholder="enter your password"
              style={styles.textInput}
              value={credentials.password}
              onChangeText={(e) =>
                setCredentials({ ...credentials, password: e })
              }
              secureTextEntry={visible}
            />
            <TouchableOpacity onPress={() => setVisible((prev) => !prev)}>
              <MaterialIcons
                name={visible ? "visibility-off" : "visibility"}
                size={16}
                color="white"
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: 20 }}>
            <Text
              style={{
                color: "white",
                marginVertical: 20,
                textAlign: "center",
              }}
            >
              Login In With
            </Text>
            <View
              style={[styles.flexRow, { justifyContent: "center", gap: 10 }]}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: undefined,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "gray",
                }}
              >
                <MaterialIcons
                  style={{ padding: 8 }}
                  name="facebook"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginLeft: 5,
                  borderColor: "gray",
                  borderRadius: 8,
                  borderWidth: 1,
                  padding: 10,
                }}
              >
                <Ionicons name="logo-google" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginLeft: 5,
                  borderColor: "gray",
                  borderRadius: 8,
                  borderWidth: 1,
                  padding: 10,
                }}
              >
                <Ionicons name="logo-apple" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={postLogin} style={styles.button}>
            <Text style={styles.buttonText}>login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "white",
    fontSize: 14,
    fontWeight: "normal",
    marginVertical: "2%",
  },
  body: {
    flex: 6,
    width: "80%",
    height: "50%",
    backgroundColor: "rgba(105, 92, 219,0.5);",
    borderRadius: 10,
    margin: 20,
    padding: 20,
    marginHorizontal: "10%",
  },
  button: {
    width: "70%",
    margin: 8,
    padding: 8,
    backgroundColor: "#9c1f89",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowColor: "black",
    shadowOpacity: 0.3, // Increase opacity for a darker shadow
    shadowRadius: 10, // Adjust the shadow radius
    elevation: 20,
    marginHorizontal: "15%",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "400",
    color: "white",
    padding: 5,
  },
  subContainer: {
    margin: 20,
  },
  textInput: {
    color: "white",
    margin: 5,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    // flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "normal",
  },
  tagLine: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  flexRow: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
