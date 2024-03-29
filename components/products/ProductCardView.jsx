import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "./productCard.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../context/CartContext";

const ProductCardView = ({ item }) => {
  const { addItemToCart } = useCart();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetails", { item })}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: item.imageUrl,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.supplier} numberOfLines={1}>
              {item.supplier}
            </Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          item.quantity = 1;
          addItemToCart(item, 1);
          navigation.navigate("Cart");
        }}
      >
        <Ionicons name="add-circle" size={35} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCardView;
