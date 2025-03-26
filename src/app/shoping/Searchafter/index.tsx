import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { Stack } from 'expo-router';
import Search from '@/components/core/searchbar/Search';
import ItemListCard from '@/components/core/itemlist/itemlistcard';
import itemlist from 'assets/data/itemlist.json';


 
const Searched = () => {
    const itemsArray = Object.values(itemlist);

  return (
    <View style={styles.shopContainer}>
        <FlatList
          initialNumToRender={10}
          data={itemsArray}
          renderItem={({ item }) => {
      
            const currencySymbol = item.price[0]; 
            const priceValue = parseFloat(item.price.slice(1)); 

            return (
              <ItemListCard
                name={item.name}
                price={`${currencySymbol}${priceValue}`}  
                rating={parseFloat(item.rating?.split(' ')[0] || '0')}
                image={item.image}
                link={item.link}
              />
            );
          }}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
  )
}

export default Searched
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
  
