import * as React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';


export default function InputValue(props) {
    return (
      <SafeAreaView style={styles.textBox}>
        <TextInput
         style={styles.text}
         placeholder="R$ 00,00"
         textAlign={'center'}
         
         ></TextInput>
      </SafeAreaView>
)}

const styles = StyleSheet.create({
  textBox: {
    paddingTop:30,
    paddingBottom:5,
    
  },
  text: {
    paddingBottom:6,
    width:106,
    borderBottomColor: '#7070708F',
    borderBottomWidth: 1,
    fontSize: 16,
    justifyContent:'center',
    textAlign:'center',
    color: '#000000',
    outline:'none',
    
  }
});