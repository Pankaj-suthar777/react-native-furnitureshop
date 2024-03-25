import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.246.227:3000/api/users/login",
        {
          password,
          email,
        }
      );
      AsyncStorage.setItem("userInfo", JSON.stringify(response.data.user));
      AsyncStorage.setItem("userToken", response.data.token);
      setUserInfo(response.data.user);
      setUserToken(response.data.token);
    } catch (error) {
      Alert.alert("No User Found", error.message, [{ text: "OK" }]);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.249.227:3000/api/users/register",
        {
          password,
          email,
          name,
        }
      );
      AsyncStorage.setItem("userInfo", JSON.stringify(response.data.user));
      AsyncStorage.setItem("userToken", response.data.token);
      setUserInfo(response.data.user);
      setUserToken(response.data.token);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("userInfo");
    setUserInfo(null);
    setUserToken(null);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let token1 = await AsyncStorage.getItem("userToken");
      let info1 = await AsyncStorage.getItem("userInfo");

      setUserInfo(JSON.parse(info1));
      setUserToken(token1);

      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        userToken,
        userInfo,
        isLoading,
        logout,
        register,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
