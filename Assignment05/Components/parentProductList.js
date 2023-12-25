import { useState, useEffect, useCallback, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import ChildRenderedItems from "./childRenderedItems";
import MyContext from "../config/MyContext";
const ParentProductList = () => {
  const [cart, setCart] = useContext(MyContext);
  const [totalQuantity, setQuantity] = useState(0);
  const products = [
    {
      id: 1,
      name: "Telcum Powder",
      img: "https://4.imimg.com/data4/NO/EO/MY-17967692/dxn-talcum-powder-500x500.jpg",
      category: "daily use",
      price: 259,
    },
    {
      id: 2,
      name: "Hair Brush",
      img: "https://miniso.pk/cdn/shop/files/72_1024x.png?v=1691057144",
      category: "fashion",
      price: 20,
    },
    {
      id: 3,
      name: "Mobile Charger",
      img: "https://oneclickshopping.pk/wp-content/uploads/2022/04/Untitled-1-13.jpg",
      category: "fashion",
      price: 393,
    },
    {
      id: 4,
      name: "Cooking Oil",
      img: "https://cdnprod.mafretailproxy.com/sys-master-root/hca/h33/9843032686622/36101_1.jpg_480Wx480H",
      category: "Cooking",
      price: 450,
    },
    {
      id: 5,
      name: "Toothpaste",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Toothpasteonbrush.jpg/1200px-Toothpasteonbrush.jpg",
      category: "daily use",
      price: 67,
    },
  ];

  const cartItemExists = (cartItems, itemId) => {
    return cart.some((item) => item.id === itemId);
  };

  const handleAddtoCart = (item) => {
    const isItemInCart = cartItemExists(cartItemExists, item.id);
    if (isItemInCart) {
      setCart([...cart, item]);
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => prev + 1);
    }
  };
  console.log("data", cart, totalQuantity);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ChildRenderedItems getCartItem={handleAddtoCart} items={products} />
        <View style={{ marginBottom: 140 }}>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>
            Cart Details
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <TouchableOpacity onPress={() => setQuantity((prev) => prev + 1)}>
              <Text
                style={{
                  color: "black",
                  borderRadius: 100,
                  borderColor: "black",
                  borderWidth: 2,
                  padding: 5,
                  textAlign: "center",
                }}
              >
                +
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => setQuantity((prev) => prev - 1)}
            >
              <Text
                style={{
                  color: "black",
                  borderRadius: 100,
                  borderColor: "black",
                  borderWidth: 2,
                  padding: 5,
                  textAlign: "center",
                }}
              >
                -
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ color: "black" }}> {cart.name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ParentProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
