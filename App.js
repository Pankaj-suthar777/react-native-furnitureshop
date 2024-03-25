import { useFonts } from "expo-font";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "./context/AuthContext";
import ChangeScreen from "./screens/ChangeScreen";
import { CartProvider } from "./context/CartContext";
import { StripeProvider } from "@stripe/stripe-react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer>
          <StripeProvider publishableKey="pk_test_51OhvW7Gr7paNn0fxbC8fWbjyifJHhT5vKdT8IR2oz8X8bAbz0oiJaqHMg8B9bUjNaEwBffNgspnjAR0QlISGQPel00EN3uyBLK">
            <ChangeScreen />
          </StripeProvider>
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  );
}
