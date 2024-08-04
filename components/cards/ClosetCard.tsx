import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

interface CardProps {
  label?: string;
  onPress?: () => void;
}

const ClosetCard: React.FC<CardProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: "30%", minWidth: 100, aspectRatio: 1 }}
      className="m-1"
    >
      <View className="w-full h-full rounded-[10px] overflow-hidden">
        {true ? (
          <ImageBackground
            source={{
              uri: "https://www.mooreseal.com/wp-content/uploads/2013/11/dummy-image-square-300x300.jpg",
            }}
            className="w-full h-full justify-center items-center"
            resizeMode="cover"
          >
            <View
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
              className="w-full h-full absolute justify-center items-center"
            >
              <Text className="text-base text-white">{label}</Text>
            </View>
          </ImageBackground>
        ) : (
          <View
            style={{ backgroundColor: "#d9d9d9" }}
            className="w-full h-full justify-center items-center"
          >
            <AntDesign name="plus" size={46} color="white" />
            <Text className="text-base text-white">Add Closet</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ClosetCard;
