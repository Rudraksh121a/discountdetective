import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface Props {
  name: string;
  price: any;
  rating: number;
  image: string;
  link: string;
}

const ItemListCard = ({ name, price, rating, image, link }: Props) => {
  return (
    <View style={styles.itemlistcard}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.contentContainer}>
        <Link href={'/shoping/onclickpreview/afterclicked'} asChild>
      <Pressable>
        <Text style={styles.title} numberOfLines={2}>
          {name}
        </Text>
      </Pressable>
        </Link>
        <Text style={styles.price}>{price}</Text>


        <View style={styles.buttonRatingContainer}>

        <Text style={styles.rating}>Rating: {rating}</Text>
        <Link href={'/shoping/onclickpreview/afterclicked'} asChild>
        <Pressable  style={styles.button}><Text style={styles.buttonText}>View Details</Text></Pressable>
        </Link>
        </View>
      </View>
    </View>
  );
};

export default ItemListCard;

const styles = StyleSheet.create({
  itemlistcard: {
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginVertical: 8,
    marginHorizontal: 4,
    overflow: "hidden",
    flexDirection: "row",
    height: 160,
  },
  imageContainer: {
    width: "40%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E8B57",
    marginBottom: 8,
  },
  rating: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  buttonRatingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
  },
});
