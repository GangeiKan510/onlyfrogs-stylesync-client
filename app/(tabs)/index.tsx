import Header from "../../components/common/Header";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Header />
      </View>
    </SafeAreaView>
  );
}
