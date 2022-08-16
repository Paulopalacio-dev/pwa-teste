import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function LinkButton(props:any) {
    return (
      <View style={styles.textBox}>
        <Text style={styles.text}>{ props.link }</Text>
      </View>
)}

const styles = StyleSheet.create({
  textBox: {
    paddingTop:15,
    paddingBottom:5,
    justifyContent:'center',
    alignItems:'center',
  },
  text: {
    borderBottomColor: '#D22688',
    borderBottomWidth: 1,
    fontSize: 13,
    fontWeight:600,
    align:'center',
    color: '#D22688'
  }
});