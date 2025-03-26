import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Trandingcard = () => {
  const [items] = useState([
    {
      image: "https://m.media-amazon.com/images/I/61BPPe1FQEL._AC_UL320_.jpg",
      name: "Strauss Synthetic Cricket Balls",
      price: "₹309",
      rating: "4.0 out of 5 stars",
    },
    {
      image: "https://m.media-amazon.com/images/I/41wUGVCHQvL._AC_UL320_.jpg",
      name: "Vibco Leather Match Ball",
      price: "₹340",
      rating: "1.5 out of 5 stars",
    },
    {
      image: "https://m.media-amazon.com/images/I/61airFTMyKL._AC_UL320_.jpg",
      name: "Tima's Poly Hard Ball",
      price: "₹335",
      rating: "3.6 out of 5 stars",
    },
    {
      image: "https://m.media-amazon.com/images/I/61q6Gpv10TL._AC_UL320_.jpg",
      name: "Neo Hanging Leather Ball",
      price: "₹475",
      rating: "No rating",
    },
    {
      image: "https://m.media-amazon.com/images/I/41I7hs4qBrL._AC_UL320_.jpg",
      name: "EmmEmm Training Ball",
      price: "₹120",
      rating: "3.5 out of 5 stars",
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.trandingText}>Today's Trending</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.trandingCard}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {items.map((item, index) => (
          <View key={index} style={styles.cardItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.rating}>{item.rating}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Trandingcard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  trandingText: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
    color: "#232f3e",
  },
  trandingCard: {
    height: 300,
    flexDirection: "row",
  },
  cardItem: {
    width: 200,
    backgroundColor: "#f7f7f7",
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: "#333",
  },
  price: {
    fontSize: 14,
    color: "#007600",
    fontWeight: "bold",
    marginBottom: 3,
  },
  rating: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#ff9900",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
