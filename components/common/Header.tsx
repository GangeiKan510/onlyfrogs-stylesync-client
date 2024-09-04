// Header.tsx
import { View, Text } from "react-native";
import React from "react";
import { usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../buttons/BackButton";

const Header = () => {
  // const path = usePathname();
  // const routeName = path.split("/")[1];
  // const includeBack = ["closet"];

  return (
    <SafeAreaView>
      {/* {includeBack.includes(routeName) && (
          <View>
            <BackButton />
          </View>
        )} */}

      <Text className="text-[48px] text-center">StyleSync</Text>
      <Text className="text-[16px] text-center">Style Effortlessly</Text>
    </SafeAreaView>
  );
};

export default Header;
