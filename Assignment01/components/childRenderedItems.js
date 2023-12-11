import { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

import React from "react";

const ChildRenderedItems = (props) => {
  const { items, getCartItem } = props;

  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: 90,
        flexDirection: "row",
        flexWrap: "wrap", // Add this line to wrap items
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {items.map((item) => (
        <TouchableOpacity
          onPress={() => getCartItem(item)}
          key={item.id}
          style={styles.singleItem}
        >
          <Image source={{ uri: item.img }} width={100} height={100} />
          <Text>{item.name}</Text>
          <Text>{item.category}</Text>
          <Text>{item.price}$</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ChildRenderedItems;

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  singleItem: {
    margin: 5,
    padding: 5,
    color: "white",
    textAlign: "center",
    backgroundColor: "gray",
    borderRadius: 20,
  },
});
