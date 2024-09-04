import React from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  Modal,
  Pressable,
  Button,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
  },
  input: {
    height: 40,
    width: "85%",
    margin: 4,
    padding: 10,
    paddingRight: 40,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  searchIcon: {
    position: "absolute",
    right: 50,
    top: "60%",
    transform: [{ translateY: -15 }],
  },
  filterIcon: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -40 }],
    borderWidth: 1,
    borderRadius: 18,
    borderColor: "#7AB2B2",
    backgroundColor: "#7AB2B2",
  },
  modalBackground: {
    top: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    opacity: 80,
  },
  modalContent: {
    width: "80%",
    height: "30%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    margin: 5,
    padding: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#7AB2B2",
  },
});

const PiecesTab = () => {
  const [search, setSearch] = React.useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setSearch}
          value={search}
          placeholder="Search for pieces"
        ></TextInput>
        <Ionicons
          style={styles.searchIcon}
          name="search-outline"
          size={24}
          color="black"
        />
        <Pressable onPress={handleModalVisibility}>
          <AntDesign
            style={styles.filterIcon}
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
          style={styles.modalBackground}
          onPress={handleModalVisibility}
        >
          <View style={styles.modalContent}>
            <View style={styles.buttonRow}>
              <View>
                <Text>Filter</Text>
              </View>
              <View>
                <Button title="Formal" onPress={() => {}} />
                <Button title="Casual" onPress={() => {}} />
                <Button title="Street" onPress={() => {}} />
                <Button title="Sweater" onPress={() => {}} />
                <Button title="Summer" onPress={() => {}} />
                <Button title="Costume" onPress={() => {}} />
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>

      <Text>Find your Pieces here</Text>
    </SafeAreaView>
  );
};

export default PiecesTab;
