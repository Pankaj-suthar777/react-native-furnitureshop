import React from "react";
import useFetch from "../../hooks/useFetch";
import { ActivityIndicator, FlatList, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
import styles from "./productList.style";
import ProductCardView from "./ProductCardView";

const ProductList = () => {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <ProductCardView item={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.seperater}></View>}
      />
    </View>
  );
};

export default ProductList;
