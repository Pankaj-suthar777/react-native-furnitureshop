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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useContext(AuthContext);

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      login(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="small" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={{ height: "45%", width: "100%", marginBottom: 10 }}>
          <Image
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            source={{
              uri: "https://img.freepik.com/free-vector/my-password-concept-illustration_114360-4294.jpg?t=st=1711689000~exp=1711692600~hmac=8eb1b30d9a51fe3d5327c465fde2118583cff06f0feee5a4b91e8ac861688fbc&w=740",
            }}
          />
        </View>
        <Text style={styles.title}>Unlimited Luxurious Furniture</Text>
        <View
          style={{
            height: 50,
            borderRadius: 14,
            paddingHorizontal: 20,
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 30,
            backgroundColor: "#d3ecf0",
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

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          {isLoading && <ActivityIndicator size="small" color="black" />}
          <Text style={styles.buttonText}>Login</Text>
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
            Don't have an account? &nbsp;
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ fontFamily: "bold", color: "#1b3427" }}>
              Register
            </Text>
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
    marginBottom: 50,
    textAlign: "center",
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

export default Login;
