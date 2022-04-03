import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import React,{useEffect} from 'react';

export default function WelcomeScreen({navigation}) {
  return ( 

    <View style={{flex:1,}}>
      <Image source={require('../../images/farmers1.jpg')} style={{flex:1, justifyContent:'center', height:'100%', width:'100%', position:'absolute', alignItems:'center'}}/> 
       <View style={{alignContent:'center',}}>
        <Text style={styles.text}>Welcome to</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SelectCountry')}>
        <View style={{height:50, width:'90%', backgroundColor:'yellow', borderRadius:7, margin:20,justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
          <Text style={{color:'green',fontWeight:'bold', fontSize:15}}>SignUp</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <View style={{height:50, width:'90%', backgroundColor:'white', borderRadius:7, margin:20, justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
          <Text style={{color:'green', fontWeight:'bold', fontSize:15}}>Login</Text>
        </View>
        </TouchableOpacity>
        </View>
    </View>
  );
};



const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '40%',
  }
})