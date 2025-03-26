import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import Search from '@/components/core/searchbar/Search';
import Trandingcard from '@/components/core/Homescreen/Trandingcard'; 
import TrandingItem from '@/components/core/Homescreen/trendingItem';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Search />
      </View>

      {/* ScrollView to make the content scrollable */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>

        {/* Trending Card */}
        <View style={styles.trandingContainer}>
          <Trandingcard />
        </View>

        {/* 4 Trending Item Groups */}
        <View style={styles.trendingItemContainer}>
          <Text style={styles.trendingItemTitle}>Today Deals</Text>
          <TrandingItem title="Amazon" />
          <TrandingItem title="Flipkart" />
          <TrandingItem title="Myntra" />
          <TrandingItem title="eBay" />
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchContainer: {
    marginBottom: 10,
  },
  scrollContainer: {
    paddingBottom: 20, 
  },
  trandingContainer: {
    marginBottom: 20,
  },
  trendingItemContainer: {
    paddingTop: 10,
  },
  trendingItemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
});
