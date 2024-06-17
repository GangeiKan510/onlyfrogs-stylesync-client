import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useCustomFonts from "@/hooks/useCustomFonts";

export default function HomeScreen() {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <View>
        <View>
          <Text className="text-center text-[48px]" style={styles.font.logo}>
            StyleSync
          </Text>
          <Text className="text-center text-[16px]" style={styles.font.normal}>Style Effortlessly.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  font: {
    logo: {
      fontFamily: "Judson-Bold",
    },
    normal: {
      fontFamily: "Inter-Regular"
    }
  },
};
