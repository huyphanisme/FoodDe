import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { featured } from '../constants';
import FeatureRow from './featureRow';

const SearchResults = () => {
  const route = useRoute();
  const { searchValue } = route.params;

  // search
    const allRestaurants = featured.reduce((acc, category) => {
        return acc.concat(category.restaurants);
    }, []);

    const filteredRestaurants = allRestaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <View className="mt-10">
      <Text>Search Results</Text>
      {filteredRestaurants.map((restaurant, index) => (
        <FeatureRow
          key={index}
          title={restaurant.name}
          restaurants={restaurant.dishes} // Assuming 'dishes' are the 'restaurants' for FeatureRow
          description={restaurant.description}
        />
      ))}
    </View>
  );
};

export default SearchResults;