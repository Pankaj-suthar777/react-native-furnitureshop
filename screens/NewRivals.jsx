import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./newRivals.style.js";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme.js";
import { ProductList } from "../components/index.js";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
const NewRivals = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>Products</Text>
        </View>
        <ProductList />
      </View>
    </SafeAreaView>
  );
};

export default NewRivals;
