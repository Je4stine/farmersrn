import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import Countries from '../Countries';

export default function SelectCountry() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
        <View >
         <TextInput
                placeholder='Search Country'
                style={styles.searchCountry}
            />
        </View>
      <Countries/>
      <Countries/>
      <Countries/>
      <Countries/>
      <Countries/>
      <Countries/>
      <Countries/>
    </View>
  );
};

const styles = StyleSheet.create({
    searchCountry: {
        height: 35,
        alignSelf: 'center',
        width: '95%',
        padding:10,
        borderWidth: 1.5,
        borderColor: 'green',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        marginTop: 20,
        backgroundColor: 'white',
    },

});