import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import styles from "./search.style";
import { COLORS, SIZES } from "../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import axios from "axios";
import SearchTile from "../components/products/SearchTile";

const Search = () => {
  const [searchKey, SetSearchKey] = useState("");
  const [searchResults, SetSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://192.168.252.227:3000/api/products/search/${searchKey}`
      );
      SetSearchResults(res.data);
    } catch (error) {
      console.log("Failed to get products", error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={SetSearchKey}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => handleSearch()}
          >
            <Feather name="search" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/images/Pose23.png")}
            style={styles.serachImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile item={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
