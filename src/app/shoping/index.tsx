import { View , StyleSheet} from 'react-native';
import { Stack } from 'expo-router';
import Search from '@/components/core/searchbar/Search';
import itemlist from 'assets/data/itemlist.json';

export default function App() {
  const itemsArray = Object.values(itemlist);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.searchContainer}>
        <Search />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 10,
  },
  shopContainer: {
    flex: 1,
    padding: 10,
  },
});
