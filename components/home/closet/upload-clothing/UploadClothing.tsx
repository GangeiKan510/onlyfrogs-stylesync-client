import React, { useState } from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import ClosetType from "@/utils/types/ClosetType";
import UploadClothingModal from "../../../dialogs/UploadClothingModal";
import Ionicons from "@expo/vector-icons/Ionicons";
import AddButton from "../../../buttons/AddButton";
import ClothingCard from "../../../cards/ClothingCard";

interface UploadClothingProps {
  item: ClosetType;
  onBack: () => void;
}

const UploadClothing = ({ item, onBack }: UploadClothingProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    console.log("upload clothing");
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    console.log("menu close");
    setIsModalVisible(false);
  };

  const handleTakePicture = () => {
    console.log("Take Picture option selected");
    handleCloseModal();
    // logic to open camera
  };

  const handleUploadFromGallery = () => {
    console.log("Upload from Gallery option selected");
    handleCloseModal();
    // logic to open gallery
  };

  const handleLinkUpload = () => {
    console.log("Upload using Link");
    handleCloseModal();
    // logic to paste link
  };

  return (
    <SafeAreaView className="">
      <Text className="text-xl font-bold mb-4">{item.name}</Text>
      <Text className="text-base mb-2">{item.description}</Text>
      <Pressable className="w-10 h-10 justify-center" onPress={onBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
      <View className="">
        <ClothingCard />
      </View>
      <View className="rounded-full top-[220%] left-[80%]">
        <AddButton onPress={handleOpenModal} isActive={isModalVisible} />
      </View>

      <UploadClothingModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        onTakePicture={handleTakePicture}
        onUploadFromGallery={handleUploadFromGallery}
        onLinkUpload={handleLinkUpload}
      />
    </SafeAreaView>
  );
};

export default UploadClothing;
