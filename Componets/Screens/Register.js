import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Register() {
  return (
    <ScrollView style={{flex:1}}>
        <View style={{alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:17, color:'green', fontWeight:'bold',marginTop:30}}>Register</Text>
        </View>
        <TextInput
                placeholder='First Name'
                style={styles.searchCountry}
            />
        <TextInput
                placeholder='Last Name'
                style={styles.searchCountry}
            />
         <TextInput
                placeholder='County/State/Province'
                style={styles.searchCountry}
            />
         <TextInput
                placeholder='Email'
                style={styles.searchCountry}
            />
         <TextInput
                placeholder='Password'
                style={styles.searchCountry}
            />
         <TextInput
                placeholder='Confirm password'
                style={styles.searchCountry}
            />
        <View style={{ flexDirection:'row', alignSelf:'center'}}>
        <View style={{width:'35%', borderBottomWidth:2, borderBottomColor:'green', marginLeft:10, marginRight:10}}></View><Text style={{fontWeight:'bold'}}>OR</Text><View style={{width:'35%', borderBottomWidth:2, borderBottomColor:'green', marginLeft:10, marginRight:10}}></View>
        </View>

        <View style={{flexDirection:'row', alignSelf:'center'}}> 
        <View style={{width:'35%',height:40, borderWidth:1, borderColor:'blue', marginLeft:10, marginTop:20, borderRadius:4}}></View>
        <View style={{width:'35%',height:40, borderWidth:1, borderColor:'orange', marginLeft:10, marginTop:20, borderRadius:4}}>
        </View>
        </View>

        <View style={{alignSelf:'center', marginTop:5}}>
            <Text style={{color:'green', fontWeight:'bold'}}>
                Already have an account? Login
            </Text>
        </View>

        <View style={{alignSelf:'center', marginTop:40}}>
            <Text style={{color:'black', fontSize:11}}>
                Terms of use privacy policy About Blog Language
            </Text>
        </View>
        <TouchableOpacity>
        <View style={{backgroundColor:'orange', height: 50, width:'90%', alignSelf:'center', borderRadius:5, alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>Sign Up</Text>
        </View>
        </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    searchCountry: {
        height: 50,
        alignSelf: 'center',
        width: '95%',
        padding:8,
        borderWidth: 0.1,
        borderRadius: 2,
        marginTop: 10,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'white',
    },
});