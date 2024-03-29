import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../context/AuthContext";
import { Ionicons, Fontisto } from "@expo/vector-icons";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigation = useNavigation();

  const { register, isLoading } = useContext(AuthContext);
  const handleRegister = async () => {
    try {
      register(name, email, password);

      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={{ height: "35%", width: "100%", marginBottom: 20 }}>
          <Image
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            source={{
              uri: "https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740",
            }}
          />
        </View>
        <Text style={styles.title}>Sign up and start shopping</Text>
        <View
          style={{
            height: 50,
            borderRadius: 14,
            paddingHorizontal: 20,
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#d3ecf0",
            flexDirection: "row",
            marginBottom: 30,
          }}
        >
          <Ionicons
            name="at-circle-outline"
            color="#808080"
            size={18}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Username"
            onChangeText={(text) => setName(text)}
            value={name}
            keyboardType="default"
            autoCapitalize="none"
          />
        </View>
        <View
          style={{
            height: 50,
            borderRadius: 14,
            paddingHorizontal: 20,
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#d3ecf0",
            flexDirection: "row",
            marginBottom: 30,
          }}
        >
          <Fontisto
            name="email"
            color="#808080"
            size={18}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View
          style={{
            height: 50,
            borderRadius: 14,
            paddingHorizontal: 20,
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#d3ecf0",
            flexDirection: "row",
            marginBottom: 30,
          }}
        >
          <Ionicons
            name="lock-open-outline"
            size={20}
            color="#808080"
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
            flexDirection: "row",
          }}
        >
          <Text style={{ fontFamily: "regular" }}>
            Already have an account? &nbsp;
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontFamily: "bold", color: "#1b3427" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  formContainer: {
    width: "80%",
  },
  title: {
    fontFamily: "bold",
    fontSize: 20,
    marginBottom: 40,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#1b3427",
    paddingVertical: 12,
    borderRadius: 14,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Register;
