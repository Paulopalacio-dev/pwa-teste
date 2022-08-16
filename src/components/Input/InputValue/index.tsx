import * as React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text } from 'react-native';


export default function InputValue(props:any) {
    return (
      <SafeAreaView style={styles.textBox}>
        <Text style={styles.textTittle}>{ props.subtittle }</Text>
        <TextInput
         style={styles.text}
         placeholder="R$ 00,00" 
         />
         
      </SafeAreaView>
)}

const styles = StyleSheet.create({
  textBox: {
    paddingTop:30,
    paddingBottom:5,
    flexDirection:'row',
  },
  textTittle: {
    fontSize: 16,
    fontWeight:600,
    align:'center',
    color: '#000'
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