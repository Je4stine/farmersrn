import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Countries() {
  return (
    <View style={{flexDirection:'row', height:60, width:'95%', backgroundColor:'white',alignItems:'center', alignSelf:'center', borderRadius:10, margin:8}}>
        <Image source={require('../images/kenya.png')} style={{height:20, width: 35, marginRight:60, marginLeft:20}} />
        <Text>Kenya</Text>
    </View>
  )
}