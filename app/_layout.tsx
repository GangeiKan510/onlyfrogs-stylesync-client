import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Judson-Bold": require("../assets/fonts/Judson-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{headerStyle: {backgroundColor: "#ffffff"}}}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
