import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />

      <Text style={styles.heading}>🕵️‍♂️ Welcome to Discount Detective</Text>
      <Text style={styles.description}>
        Discover a world of shopping and delicious food, all at your fingertips!
      </Text>

      {/* Information Cards */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🛒 Shopping</Text>
          <Text style={styles.cardText}>
            Browse exclusive deals and the latest products.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🍲 Food Orders</Text>
          <Text style={styles.cardText}>
            Satisfy your cravings with quick, tasty deliveries.
          </Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <Link href="/shoping" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Shopping</Text>
        </TouchableOpacity>
        </Link>

        <Link href="/food" asChild> 
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Order a Meal</Text>
        </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e", // Rich dark blue background
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#e94560", // Premium red accent
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#f5f5f5", // Soft white for readability
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  cardContainer: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#16213e", // Deep navy for a sophisticated look
    borderRadius: 15,
    padding: 20,
    width: 160,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e94560",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#e94560", // Consistent with the heading color
    textAlign: "center",
  },
  cardText: {
    fontSize: 14,
    textAlign: "center",
    color: "#cfcfcf", // Soft grey for balance
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    marginTop: 15,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#e94560",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
