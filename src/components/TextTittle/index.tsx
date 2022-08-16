import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function TextTittle(props:any) {
    return (
      <View style={styles.textBox}>
        <Text style={styles.text}>{ props.subtittle }</Text>
      </View>
)}

const styles = StyleSheet.create({
  textBox: {
    paddingTop:30,
    paddingBottom:5,
    left:15,
    right:0,
  },
  text: {
    fontSize: 16,
    fontWeight:600,
    align:'center',
    color: '#000'
  }
});