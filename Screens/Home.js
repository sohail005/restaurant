import React, { useState,useEffect } from 'react';
import {  Text, View ,SafeAreaView,ScrollView} from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import Headertabs from '../components/home/Headertabs';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import SearchBar from '../components/home/Searchbar';

const YELP_API_KEY =
  "FFwDsF57wC_EcGyrhD3DiVWeLmbYRSJrxzOntFsQXkdQOIp9MtsbEzFOXM5Qbc6ADsAY0t2vV5b4bLw3GGwsNH7jBH0YhqBwmigtvMjIJpljgvvXeQYRiSzjP552YXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <Text style={{marginTop:8}}></Text>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <Headertabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
    <Divider width={1}/>
     <BottomTabs />
    </SafeAreaView>
  );
}