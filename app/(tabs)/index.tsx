import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

const HomeScreen = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
    "Judson-Bold": require("../../assets/fonts/Judson-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-white" onLayout={onLayoutRootView}>
      <View className="mt-5">
        <View>
          <Text className="text-center text-[48px] font-logo">StyleSync</Text>
          <Text className="text-center text-[16px] font-sans">
            Style Effortlessly.
          </Text>
        </View>
        <View className="mx-8 mt-10">
          <Text className="font-bold text-[20px] font-sans">
            Thank you for styling with us!
          </Text>
          <Text className="text-base font-sans">
            Please enter your details for registration:
          </Text>
          <View className="mt-10">
            <Text className="text-base font-sans">First Name</Text>
            <TextInput className="bg-bg-secondary text-base rounded-[10px] h-[42px] px-3 mt-1 mb-3" />
            <Text className="text-base font-sans">Last Name</Text>
            <TextInput className="bg-bg-secondary text-base rounded-[10px] h-[42px] px-3 mt-1 mb-3" />
            <Text className="text-base font-sans">Email</Text>
            <TextInput className="bg-bg-secondary text-base rounded-[10px] h-[42px] px-3 mt-1 mb-3" />
            <Text className="text-base font-sans">Password</Text>
            <TextInput className="bg-bg-secondary text-base rounded-[10px] h-[42px] px-3 mt-1 mb-3" />
            <Text className="text-base font-sans">Confirm Password</Text>
            <TextInput className="bg-bg-secondary text-base rounded-[10px] h-[42px] px-3 mt-1 mb-3" />
            <TouchableOpacity className="h-[42px] bg-bg-tertiary rounded-[10px] justify-center my-5">
              <Text className="text-center text-white text-base align-middle">
                Sign Up
              </Text>
            </TouchableOpacity>
            <View className="flex-row items-center my-5">
              <View className="flex-1 h-px bg-[#b7b7b7]" />
              <Text className="mx-4 text-base">or</Text>
              <View className="flex-1 h-px bg-[#b7b7b7]" />
            </View>
            <TouchableOpacity className="h-[42px] bg-bg-secondary rounded-[10px] justify-center my-5">
              <Text className="text-center text-base align-middle">
                Sign up with Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
