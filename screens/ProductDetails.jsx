import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./productDetails.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";

const ProductDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: "https://media.istockphoto.com/id/1357529193/photo/3d-rendering-of-a-cozy-living-room.jpg?s=2048x2048&w=is&k=20&c=3DNM6MEVHjVYylIG3nigNKX1NMiBdZRN3PxfThhwIXc=",
        }}
      />
    </View>
  );
};

export default ProductDetails;
