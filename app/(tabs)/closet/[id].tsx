import { Text, View, FlatList, Animated } from "react-native";
import React, { useState, useRef } from "react";
import { useLocalSearchParams, usePathname } from "expo-router";
import Header from "../../../components/common/Header";
import ClothingCard from "../../../components/cards/ClothingCard";
import AddButton from "../../../components/buttons/AddButton";
import UploadClothingModal from "../../../components/dialogs/UploadClothingModal";
import BackButton from "../../../components/buttons/BackButton";

const Page = () => {
  const { id } = useLocalSearchParams();

  const path = usePathname();
  const routeName = path.split("/")[1];
  const includeBack = ["closet"];

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

  const clothingItems = new Array(20).fill(0);

  // Animated value for hiding the title and description and adjusting margin
  const scrollY = useRef(new Animated.Value(0)).current;

  // Interpolating opacity
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100], // Scroll range
    outputRange: [1, 0], // Opacity range
    extrapolate: "clamp", // Prevent values outside the range
  });

  // Interpolating margin bottom
  const headerMarginBottom = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [30, -30], // Adjust the starting and ending margin
    extrapolate: "clamp",
  });

  return (
    <View className="flex-1 bg-white">
      <View className="mt-14">
        <Header />
      </View>
      {includeBack.includes(routeName) && (
        <View className="relative z-0 mt-[-13%] ml-4 mb-11">
          <BackButton />
        </View>
      )}

      {/* Title and Description with Animated Opacity and Margin */}
      <Animated.View
        style={{
          opacity: headerOpacity, // Apply animated opacity
          marginBottom: headerMarginBottom, // Apply animated margin bottom
        }}
        className="items-center mb-1] border-[#F3F3F3]"
      >
        <Text className="text-xl font-bold text-center">Closet Title</Text>
        <Text className="text-base">Closet Description</Text>
      </Animated.View>

      {/* Clothing Card List */}
      <Animated.FlatList
        data={clothingItems}
        renderItem={() => <ClothingCard />}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={{
          marginLeft: 15,
        }}
        showsVerticalScrollIndicator={true}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }, // Enable native driver for better performance
        )}
      />

      {/* Floating Add Button */}
      <View className="absolute z-10 bottom-10 right-10">
        <AddButton onPress={handleOpenModal} isActive={isModalVisible} />
      </View>

      <UploadClothingModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        onTakePicture={handleTakePicture}
        onUploadFromGallery={handleUploadFromGallery}
        onLinkUpload={handleLinkUpload}
      />
    </View>
  );
};

export default Page;