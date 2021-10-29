
import React from 'react';
import {  Text, View ,SafeAreaView, Image, ScrollView} from 'react-native';

const items = [
    {
        image:require('../../assets/images/Non-veg.png'),
        text:'Non Veg',
    },
    {
        image:require('../../assets/images/bread.png'),
        text:'Bakery',
    },
    {
        image:require('../../assets/images/fast-food.png'),
        text:'Fast Food',
    },
    {
        image:require('../../assets/images/chocolate.png'),
        text:'Chocolates',
    },
    {
        image:require('../../assets/images/sweet.png'),
        text:'Sweets',
    },

]

export default function Categories() {
  return (
      <View style={{marginTop:5,
      backgroundColor:"#fff",
      paddingVertical:10,
      paddingLeft:20}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item,index) => (
          <View key={index} style={{alignItems: 'center',marginRight:30}}>
          <Image source={item.image}
          style={{width:50,
          height:50,
          resizeMode:"contain"}} />
          <Text style={{fontSize:13,fontWeight:"900"}}>{item.text}</Text>
          </View>
          ))}
      </ScrollView></View>
      );
}

