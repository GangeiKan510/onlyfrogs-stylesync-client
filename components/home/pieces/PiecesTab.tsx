import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  Modal,
  Pressable,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

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
    alignItems: "flex-start",
  },
  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    margin: 2,
    padding: 5,
    backgroundColor: "white",
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#7AB2B2",
  },
  buttonText: {
    fontSize: 18,
    color: "#7AB2B2",
    textAlign: "center",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

const items = [
  { id: "1", category: "Formal", name: "Suit" },
  { id: "2", category: "Casual", name: "T-shirt" },
  { id: "3", category: "Street", name: "Jacket" },
  { id: "4", category: "Sweater", name: "Cardigan" },
  { id: "5", category: "Summer", name: "Shorts" },
  { id: "6", category: "Costume", name: "Elf" },
];

const PiecesTab = () => {
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter],
    );
  };

  const filteredItems = items.filter(
    (item) =>
      (selectedFilters.length === 0 ||
        selectedFilters.includes(item.category)) &&
      item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setSearch}
          value={search}
          placeholder="Search for pieces"
        />
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
            <View>
              <Text style={{ textAlign: "right", fontSize: 20 }}>Filter</Text>
            </View>
            <View style={styles.buttonRow}>
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
                  style={[
                    styles.button,
                    {
                      backgroundColor: selectedFilters.includes(filter)
                        ? "#7AB2B2"
                        : "white",
                    },
                  ]}
                  onPress={() => toggleFilter(filter)}
                >
                  <Text style={styles.buttonText}>{filter}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </Pressable>
      </Modal>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default PiecesTab;
