import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationIndependentTree} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const menuItems = [
  {id: '1', category: 'Hot Drinks', name: 'Americano', desc: 'Bold and strong black coffee brewed with espresso shots.'},
  {id: '2', category: 'Hot Drinks', name: 'Cappuccino', desc: 'Classic Italian coffee with equal parts espresso, steamed milk, and foam.'},
  {id: '3', category: 'Hot Drinks', name: 'Latte', desc: 'Smooth espresso blended with creamy steamed milk.'},
  {id: '4', category: 'Cold Drinks', name: 'Iced Coffee', desc: 'Chilled brewed coffee served over ice for a refreshing kick.'},
  {id: '5', category: 'Cold Drinks', name: 'Frappuccino', desc: 'Blended iced coffee drink topped with whipped cream.'},
  {id: '6', category: 'Waffles', name: 'Chocolate'},
  {id: '7', category: 'Waffles', name: 'Maple'},
  {id: '8', category: 'Waffles', name: "Cookies 'n' Cream"}
];

const Stack = createStackNavigator();

function HomeScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>KAPINE</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <TouchableOpacity
              style={styles.viewItemButton}
              onPress={() => navigation.navigate('Detail', {coffee: item})}
            >
              <Text style={styles.viewItemText}>View Item</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

function DetailScreen({route, navigation}: any) {
  const {coffee} = route.params;

  return (
    <View style={styles.detailScreenContainer}>
    <View style={styles.item}>
        <Text style={styles.category}>{coffee.category}</Text>
        <Text style={styles.name}>{coffee.name}</Text>
        <Text style={styles.category}>{coffee.desc}</Text>

        <TouchableOpacity
          style={styles.backToMenuButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.viewItemText}>Back to Menu</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator>
        <Stack.Screen name='Menu' component={HomeScreen}/>
        <Stack.Screen name='Detail' component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationIndependentTree>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#30302E'
  },

  heading: {
    fontSize: 48,
    marginBottom: 20,
    color: '#FAF9F5',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  item: {
    marginBottom: 12,
    borderBottomColor: '#FAF9F5',
    borderBottomWidth: 2
  },

  category: {
    fontSize: 12,
    color: '#888',
    fontWeight: 'bold'
  },

  name: {
    fontSize: 18,
    color: '#FAF9F5',
    fontWeight: 'bold'
  },

  viewItemButton: {
    width: 100,
    borderColor: '#FAF9F5',
    borderWidth: 2,
    backgroundColor: '#30302E',
    borderRadius: 10,
    margin: 10
  },

  viewItemText: {
    color: '#FAF9F5',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  },

  detailScreenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#30302E',
    justifyContent: 'center',
    alignItems: 'center'
  },

  backToMenuButton: {
    width: 350,
    borderColor: '#FAF9F5',
    borderWidth: 2,
    backgroundColor: '#30302E',
    borderRadius: 10,
    margin: 10,
  },
});
