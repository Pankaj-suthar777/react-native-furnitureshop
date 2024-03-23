import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import styles from "./profile.style";
import { COLORS } from "../constants";
import ProfileDetails from "../components/profile/ProfileDetails";

const Profile = () => {
  const navigation = useNavigation();
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
            source={require("../assets/user.jpg")}
            style={styles.userimage}
          />
          <View>
            <Text style={styles.username}>Pankaj Suthar</Text>
            <Text style={styles.email}>pankaj@gmail.com</Text>
          </View>
        </View>

        <ProfileDetails
          icon={
            <Ionicons
              name="phone-portrait-outline"
              size={30}
              color={COLORS.black}
            />
          }
          title="Phone Number"
          value="987654321"
        />
        <ProfileDetails
          icon={<Fontisto name="email" size={30} color={COLORS.black} />}
          title="Email"
          value="pankaj@gmail.com"
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
