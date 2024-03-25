import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./CartItem.style";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useCart } from "../../context/CartContext";
const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity } = useCart();
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
        <Text style={styles.productTitle}>{item.title}</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={styles.supplier}>${item.price}</Text>
          <View style={styles.rating}>
            <TouchableOpacity
              onPress={() => {
                increaseQuantity(item._id);
              }}
            >
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={[styles.ratingText, { marginHorizontal: 8 }]}>
              {item.quantity}
            </Text>
            <TouchableOpacity
              onPress={() => {
                if (item.quantity > 1) {
                  decreaseQuantity(item._id);
                }
              }}
            >
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
