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
import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import SquareButton from "../components/SquareButton";

function Cart() {
  const navigation = useNavigation();
  const { cart, clearCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={30} color={COLORS.black} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontFamily: "semibold", fontSize: 32 }}>
          No Items In Cart
        </Text>
        <SquareButton
          style={{ paddingHorizontal: 12, marginTop: 12 }}
          title="Go To Home Page"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30, position: "relative" }}>
      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 20,
          borderWidth: 2,
          borderBottomWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
        }}
      >
        <View
          style={{
            marginHorizontal: 24,
            marginTop: 20,
            borderWidth: 2,
            paddingHorizontal: 24,
            paddingVertical: 10,
          }}
        >
          <Text style={{ fontFamily: "bold", fontSize: 18 }}>
            Total Items : {cart.length}
          </Text>
          <Text style={{ fontFamily: "bold", fontSize: 18 }}>
            Total Price : ${cartTotal}
          </Text>
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => navigation.navigate("CheckoutDetails")}
            title="CHECKOUT"
            color="black"
          />
        </View>
        <View style={{ marginHorizontal: 18, marginTop: 5 }}>
          <SquareButton title="Clear Cart" onPress={() => clearCart()} />
        </View>
      </View>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, marginTop: 40 }}>
        {cart.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </View>
    </SafeAreaView>
  );
}

export default Cart;
