import React from 'react';
import {  Text, View ,TouchableOpacity,ScrollView,Image} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants=[
    {
      
name:"The Hotel Place",
image_url:"https://media-cdn.tripadvisor.com/media/photo-s/11/bf/02/8c/salle-de-restaurant.jpg",
categories:["cafe","Bar"],
price:"872",
reviews:1125,
rating:"4.9"
},
{
    name:"The Lucky Hotel",
    image_url:"https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/10/The-Only-Place.jpg",
    categories:["Bakery","Bar"],
    price:"425",
    reviews:115,
    rating:"4.5"
    },
    {
        name:"The Sweet Hotel",
        image_url:"https://media-cdn.tripadvisor.com/media/photo-s/1a/18/3a/cb/restaurant-le-47.jpg",
        categories:["Bakery","Fast food"],
        price:"520",
        reviews:2525,
        rating:"4.2"
        },
]
export default function RestaurantItems({ navigation, ...props }) {
    return (
        <>
            {props.restaurantData.map(( restaurant, index ) => (
                <TouchableOpacity 
                key={index}
                activeOpacity={1} style={{marginBottom:10}}
                onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      name: restaurant.name,
                      image: restaurant.image_url,
                      price: restaurant.price,
                      reviews: restaurant.review_count,
                      rating: restaurant.rating,
                      categories: restaurant.categories,
                    })}>
        <View style={{marginTop:10,padding:15,backgroundColor:"white"}}>
            <RestaurantImage image={restaurant.image_url}/>
             <RestaurantInfo name={restaurant.name} rating={localRestaurants[0].rating}/>
        </View></TouchableOpacity>
        ))}
        </>
        );
  }
  
  const RestaurantImage =(props)=>(
      <>
      <Image source={{uri:props.image}} style={{width:'100%', height:180}}/>
 <TouchableOpacity style={{position:'absolute',right:20 ,marginTop:20}}>
     <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
 </TouchableOpacity>
  </>);
   const RestaurantInfo =(props)=>(
    <>
    <View style={{flexDirection:"row" ,
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:5}}>
  
    <View>
    <Text style={{fontSize:15,fontWeight:"bold"
}}>{props.name}</Text>
    <Text style={{fontSize:13,color:"gray"}}>30-40 .min</Text>
    </View> 
    <View style={{backgroundColor:"#eee",
     height:30,width:30,
     alignItems:"center",
     justifyContent:"center"}}>
    <Text >{props.rating}</Text>
    </View>
    </View>
</>)