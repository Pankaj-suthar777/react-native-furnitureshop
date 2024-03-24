import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import styles from "./profile.style";
import { COLORS } from "../constants";
import ProfileDetails from "../components/profile/ProfileDetails";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const navigation = useNavigation();
  const { userInfo, logout } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={styles.profileText}>Profile</Text>
      </View>
      <View>
        <View style={styles.profileRow}>
          <Image
            source={{ uri: userInfo.profilePicture }}
            style={styles.userimage}
          />
          <View>
            <Text style={styles.username}>{userInfo.name}</Text>
            <Text style={styles.email}>{userInfo.email}</Text>
          </View>
        </View>

        <ProfileDetails
          onPress={() => {
            navigation.navigate("Cart");
          }}
          icon={<Ionicons name="cart-outline" size={30} color={COLORS.black} />}
          title="Cart"
        />

        <ProfileDetails
          icon={<Ionicons name="list-outline" size={30} color={COLORS.black} />}
          title="Order"
        />

        <ProfileDetails
          icon={
            <Ionicons
              name="phone-portrait-outline"
              size={30}
              color={COLORS.black}
            />
          }
          title="Phone Number"
          value={userInfo.phone || "not registered"}
        />
        <ProfileDetails
          icon={<Fontisto name="email" size={30} color={COLORS.black} />}
          title="Email"
          value={userInfo.email}
        />
        <ProfileDetails
          icon={
            <Ionicons
              name="lock-closed-outline"
              size={30}
              color={COLORS.black}
            />
          }
          title="Change Password"
          value="*******"
        />
        <ProfileDetails
          onPress={() => {
            if ((title = "Logout")) {
              logout();
            }
          }}
          icon={
            <Ionicons name="log-out-outline" size={30} color={COLORS.black} />
          }
          title="Logout"
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
