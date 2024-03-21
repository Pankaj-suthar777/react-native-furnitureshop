import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./productDetails.style";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

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
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$600</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons name="star" key={index} size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>
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
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
            urna vitae urna consequat consequat. Donec hendrerit libero vel sem
            vehicula, vel ullamcorper tortor finibus. Proin vitae neque ac arcu
            ultricies fringilla. Sed non metus tincidunt, maximus odio id,
            malesuada eros. Vivamus id velit eget nisi congue convallis.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Maecenas non neque magna. Suspendisse sed
            nibh ultricies, molestie felis non, feugiat quam. Integer eu dui a
            libero tempus auctor. Sed hendrerit, purus a eleifend consectetur,
            arcu nisl dictum lectus, at fringilla nulla justo sit amet enim.
            Maecenas euismod congue sodales. Phasellus tempor sapien at felis
            euismod, quis commodo sem facilisis. Sed dapibus eros vitae erat
            consequat efficitur. Suspendisse potenti. Sed nec posuere nisi. Cras
            a nunc a leo varius luctus.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
