import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import styles from "./home.style";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />

          <Text style={styles.location}>Mumbai India</Text>

          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}> 8 </Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
