import * as React from 'react';
import { View, StyleSheet, Text} from 'react-native';


export default function TextButton() {
    return (
      <View style={styles.square}>
        <Text style={styles.text}>Continuar</Text>
      </View>
)}

const styles = StyleSheet.create({
  square: {
    marginTop:50,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    width:166,
    height: 40,
    borderRadius:30,
    backgroundColor: "#D22688",
  },
  text: {
    fontSize: 16,
    fontWeight:600,
    color: '#FFFFFF'
  },
});