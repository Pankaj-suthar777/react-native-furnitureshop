import React, { useContext, useState } from "react";
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import styles from "./cart.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CartContext, useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";

function Cart() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const navigation = useNavigation();
  const { cart, clearCart, cartTotal } = useCart();

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30 }}>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("CheckoutDetails")}
          title="CHECKOUT"
          color="black"
        />
      </View>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, marginTop: 5 }}>
        {cart.map((item) => (
          <CartItem item={item} />
        ))}
      </View>
    </SafeAreaView>
  );
}

export default Cart;
