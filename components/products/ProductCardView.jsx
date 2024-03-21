import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "./productCard.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1357529193/photo/3d-rendering-of-a-cozy-living-room.jpg?s=2048x2048&w=is&k=20&c=3DNM6MEVHjVYylIG3nigNKX1NMiBdZRN3PxfThhwIXc=",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.price}>$999</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
