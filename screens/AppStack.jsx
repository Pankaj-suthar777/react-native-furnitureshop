import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomTabNavigation from "../navigation/BottomTabNavigation";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import NewRivals from "./NewRivals";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bottom Navigation"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductList"
        component={NewRivals}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
