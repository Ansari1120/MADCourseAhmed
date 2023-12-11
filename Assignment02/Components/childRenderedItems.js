import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

import React from "react";

const ChildRenderedItems = (props) => {
  const { items, getCartItem } = props;
  return (
    <View style={styles.container}>
      {items.map((item) => (
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
      ))}
    </View>
  );
};

export default ChildRenderedItems;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  singleItem: {
    margin: 5,
    padding: 5,
    color: "black",
    textAlign: "center",
    backgroundColor: "gray",
    borderRadius: 20,
  },
});
