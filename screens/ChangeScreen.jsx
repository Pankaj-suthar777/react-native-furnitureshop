import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const ChangeScreen = () => {
  const { userToken, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{userToken !== null ? <AppStack /> : <AuthStack />}</>;
};

export default ChangeScreen;
