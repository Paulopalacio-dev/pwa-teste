import * as React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text } from 'react-native';


export default function InputMonth(props:any) {
    return (
      <SafeAreaView style={styles.textBox}>
        <TextInput
         style={styles.text}
         placeholder="00" 
         />
          <Text style={styles.textTittle}>{ props.subtittle }</Text>
      </SafeAreaView>
)}

const styles = StyleSheet.create({
  textBox: {
    paddingTop:30,
    paddingBottom:5,
    flexDirection:'row'
  },
  textTittle: {
    fontSize: 16,
    fontWeight:600,
    align:'center',
    color: '#000'
  },
  text: {
    paddingBottom:6,
    width:75,
    borderBottomColor: '#7070708F',
    borderBottomWidth: 1,
    fontSize: 16,
    justifyContent:'center',
    textAlign:'center',
    color: '#000000',
    outline:'none',
    
  }
});