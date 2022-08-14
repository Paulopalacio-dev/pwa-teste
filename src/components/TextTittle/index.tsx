import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function TextTittle(props) {
    return (
      <View style={styles.textBox}>
        <Text style={styles.text}>{ props.children }</Text>
      </View>
)}

const styles = StyleSheet.create({
  textBox: {
    padding:30,
  
  },
  text: {
    fontSize: 16,
    fontWeight:600,
    align:'center',
    color: '#000'
  }
});