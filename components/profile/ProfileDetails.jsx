import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const ProfileDetails = ({ icon, title, value, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 12,
        marginTop: 40,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {icon}
        <Text
          style={{
            fontFamily: "semibold",
            marginLeft: 20,
          }}
        >
          {title}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "semibold",
            color: COLORS.gray,
            marginRight: 12,
          }}
        >
          {value}
        </Text>

        {value && (
          <Ionicons name="chevron-forward" size={30} color={COLORS.black} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProfileDetails;
