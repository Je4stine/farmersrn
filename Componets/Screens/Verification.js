import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function VerificationScreen({navigation}) {
  return (
    <View>
        <View>
            <Text style={{color:'green'}}>Logo</Text>
        </View>
      <View style={{alignItems:'center', justifyContent:'center'}}>
      <Text>Thank your for registering</Text>
      <Text>with farmers network. Please check</Text>
      <Text>your phone to verify your account</Text>
      </View>
      <TouchableOpacity >
        <View style={{backgroundColor:'orange', height: 50, width:'90%', alignSelf:'center', borderRadius:5, alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>Verify</Text>
        </View>
        </TouchableOpacity>
    </View>
  );
};