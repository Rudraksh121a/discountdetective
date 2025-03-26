import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
      />
      <Ionicons name="search" size={24} color="black" />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
