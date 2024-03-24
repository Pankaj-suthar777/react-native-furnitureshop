import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./CartItem.style";
const CartItem = ({ item }) => {
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
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={[styles.ratingText, { marginHorizontal: 8 }]}>
              {count}
            </Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
