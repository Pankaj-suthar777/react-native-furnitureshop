import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./CartItem.style";
import { useNavigation } from "@react-navigation/native";
const OrderItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.conatiner}>
      <TouchableOpacity
        style={styles.image}
        onPress={() => navigation.navigate("ProductDetails", { item })}
      >
        <Image
          source={{
            uri: item.imageUrl,
          }}
          style={styles.productImg}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={[styles.productTitle, { fontSize: 12 }]}>
          {item.title}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={styles.supplier}>Quantity : {item.quantity}</Text>
          <Text style={styles.supplier}>${item.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;
