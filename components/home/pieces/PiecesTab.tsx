import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  Modal,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

const PiecesTab = () => {
  const [search, setSearch] = React.useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView>
      <View className="relative w-full">
        <TextInput
          className="h-10 w-10/12 m-1 p-2 pr-10 border-b border-black"
          onChangeText={setSearch}
          value={search}
          placeholder="Search for pieces"
        />
        <Ionicons
          className="absolute right-12 top-1/2 transform -translate-y-1/2"
          name="search-outline"
          size={24}
          color="black"
        />
        <Pressable onPress={handleModalVisibility}>
          <AntDesign
            className="absolute right-2 top-1/2 transform -translate-y-1/2 border border-teal-400 bg-teal-400 rounded-full p-2"
            name="filter"
            size={35}
            color="white"
          />
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalVisibility}
      >
        <Pressable
          className="flex-1 justify-center items-center bg-black bg-opacity-50"
          onPress={handleModalVisibility}
        >
          <View className="w-4/5 h-1/3 p-5 bg-white rounded-lg">
            <View>
              <Text className="text-right text-lg">Filter</Text>
            </View>
            <View className="flex-row flex-wrap justify-center">
              {[
                "Formal Attire",
                "Casual",
                "Street",
                "Sweater",
                "Summer",
                "Costume",
              ].map((filter) => (
                <Pressable
                  key={filter}
                  className="m-1 p-1.5 border border-teal-400 rounded-md bg-white"
                >
                  <Text className="text-lg text-center text-teal-400">
                    {filter}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default PiecesTab;
