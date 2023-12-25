import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";

const ChildRenderedItems = (props) => {
  const { items, getCartItem } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => getCartItem(item)}
            key={item.id}
            style={styles.singleItem}
          >
            <Image source={item.img} width={20} height={20} />
            <Text> {item.name}</Text>
            <Text> {item.category}</Text>
            <Text> {item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ChildRenderedItems;

const styles = StyleSheet.create({
  container: {
    marginTop: 260,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  singleItem: {
    margin: 5,
    padding: 5,
    color: "white",
    textAlign: "center",
    backgroundColor: "gray",
    borderRadius: 20,
  },
});
