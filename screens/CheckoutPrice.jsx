import React from "react";
import { Button, Text, View } from "react-native";
import { COLORS } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const CheckoutPrice = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          marginHorizontal: 24,
          marginTop: 40,
          borderWidth: 2,
          paddingHorizontal: 24,
          paddingVertical: 16,
        }}
      >
        <Text style={{ fontFamily: "bold", fontSize: 18 }}>
          Total Items : 55
        </Text>
        <Text style={{ fontFamily: "bold", fontSize: 18 }}>
          Total Price : $66
        </Text>
        <Text style={{ fontFamily: "semibold", fontSize: 18, marginTop: 8 }}>
          Delivery on 16 March
        </Text>
        <Text style={{ fontFamily: "semibold", fontSize: 18 }}>
          Free Delivery
        </Text>
        <View
          style={{
            color: COLORS.lightWhite,
            backgroundColor: "black",
            marginHorizontal: 18,
            marginTop: 20,
          }}
        >
          <Button title="CHECKOUT" color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutPrice;
