import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

interface Props {
  title: string;
}

const TrandingCard = (props: Props) => {
  const items = [
    {
      image: "https://m.media-amazon.com/images/I/61BPPe1FQEL._AC_UL320_.jpg",
      name: "Strauss Synthetic Cricket Balls",
    },
    {
      image: "https://m.media-amazon.com/images/I/41wUGVCHQvL._AC_UL320_.jpg",
      name: "Vibco Leather Match Ball",
    },
    {
      image: "https://m.media-amazon.com/images/I/61airFTMyKL._AC_UL320_.jpg",
      name: "Tima's Poly Hard Cricket Ball",
    },
    {
      image: "https://m.media-amazon.com/images/I/61q6Gpv10TL._AC_UL320_.jpg",
      name: "Neo Hanging Leather Ball",
    },
  ];

  const handlePress = (imageUri: string) => {
    console.log("Image clicked:", imageUri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.BigCard}>
        <Text style={styles.amazonTitle}>{props.title}</Text>
        <View style={styles.gridContainer}>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemContainer}
              onPress={() => handlePress(item.image)}
            >
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default TrandingCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  BigCard: {
    backgroundColor: "#f7f7f7",
    padding: 20,
    margin: 15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  amazonTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#232f3e",
    marginBottom: 15,
    textAlign: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemContainer: {
    width: "48%",
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  itemImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  itemText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    paddingVertical: 4,
    backgroundColor: "#e0e0e0",
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
