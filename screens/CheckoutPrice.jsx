// import React from "react";
// import { Button, Text, View } from "react-native";
// import { COLORS } from "../constants";
// import { SafeAreaView } from "react-native-safe-area-context";

// const CheckoutPrice = () => {
//   return (
//     <SafeAreaView>
//       <View
//         style={{
//           marginHorizontal: 24,
//           marginTop: 40,
//           borderWidth: 2,
//           paddingHorizontal: 24,
//           paddingVertical: 16,
//         }}
//       >
//         <Text style={{ fontFamily: "bold", fontSize: 18 }}>
//           Total Items : 55
//         </Text>
//         <Text style={{ fontFamily: "bold", fontSize: 18 }}>
//           Total Price : $66
//         </Text>
//         <Text style={{ fontFamily: "semibold", fontSize: 18, marginTop: 8 }}>
//           Delivery on 16 March
//         </Text>
//         <Text style={{ fontFamily: "semibold", fontSize: 18 }}>
//           Free Delivery
//         </Text>
//         <View
//           style={{
//             color: COLORS.lightWhite,
//             backgroundColor: "black",
//             marginHorizontal: 18,
//             marginTop: 20,
//           }}
//         >
//           <Button title="CHECKOUT" color="black" />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default CheckoutPrice;
import React, { useState } from "react";
import { useStripe } from "@stripe/stripe-react-native";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { useCart } from "../context/CartContext";
import { fetchFromAPI } from "../helpers/fetchFromAPI";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const CheckoutPrice = () => {
  const [email, setEmail] = useState("");
  const { cart } = useCart();
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
      const response = await axios.post(
        "http://192.168.246.227:3000/create-checkout-session",
        {
          amount: 660,
        }
      );
      const res = await initPaymentSheet({
        merchantDisplayName: "pankaj",
        paymentIntentClientSecret: response.data.sessionId,
        defaultBillingDetails: {
          address: "ddd",
          email: "pank@gmail.com",
          name: "dd",
          phone: 987654321,
        },
      });
      if (res) {
        console.log(res);
        return;
      }

      //await presentPaymentSheet();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TouchableOpacity onPress={handleCheckout} style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = {
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
};

export default CheckoutPrice;
