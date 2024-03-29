import React, { useState } from "react";
import { useStripe } from "@stripe/stripe-react-native";
import {
  TextInput,
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useCart } from "../context/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { COLORS, SIZES } from "../constants";
import OrderItem from "../components/cart/OrderItem";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CheckoutPrice = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const { cart, cartTotal } = useCart();
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const handleCheckout = async () => {
    // const line_items = cart.map((item) => {
    //   return {
    //     quantity: item.quantity,
    //     price_data: {
    //       currency: "usd",
    //       unit_amount: item.price * 100,
    //       product_data: {
    //         name: item.title,
    //         description: item.description,
    //         images: [item.imageUrl],
    //       },
    //     },
    //   };
    // });

    // const response = await fetchFromAPI("create-checkout-session", {
    //   body: { line_items, customer_email: "customer@example.com" },
    // });

    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://192.168.128.227:3000/create-checkout-session",
        {
          amount: 660,
        }
      );
      const res = await initPaymentSheet({
        merchantDisplayName: "pankaj",
        paymentIntentClientSecret: response.data.sessionId,
        customFlow: true,
      });
      setIsLoading(false);
      if (res) {
        console.log(res);
      }

      await presentPaymentSheet();
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          top: 80,
          width: SIZES.width - 44,
          zIndex: 999,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ flexDirection: "row" }}
        >
          <Ionicons name="chevron-back" size={30} color={COLORS.black} />
          <Text style={{ fontFamily: "semibold", fontSize: 20, marginLeft: 8 }}>
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: 24,
          marginTop: 90,
          borderWidth: 2,
          paddingHorizontal: 24,
          paddingVertical: 16,
        }}
      >
        <Text style={{ fontFamily: "bold", fontSize: 24 }}>
          Total Items : {cart.length}
        </Text>
        <Text style={{ fontFamily: "bold", fontSize: 24 }}>
          Total Price : ${cartTotal}
        </Text>
        <Text style={{ fontFamily: "semibold", fontSize: 18, marginTop: 8 }}>
          Delivery on 16 March
        </Text>
        <Text style={{ fontFamily: "semibold", fontSize: 18 }}>
          Free Delivery
        </Text>
        <ScrollView style={{ marginTop: 20, height: 300 }}>
          {cart.map((item) => (
            <OrderItem key={item._id} item={item} />
          ))}
        </ScrollView>
        <View
          style={{
            color: COLORS.lightWhite,
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 5,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              opacity: isLoading ? 0.5 : 1,
            }}
            onPress={() => {
              if (!isLoading) {
                handleCheckout();
              }
            }}
            activeOpacity={0.8}
            disabled={isLoading}
          >
            {isLoading && <ActivityIndicator size="small" color="white" />}
            <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
              CHECKOUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutPrice;
