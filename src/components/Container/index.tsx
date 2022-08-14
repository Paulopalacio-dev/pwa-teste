import * as React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';


export default function Container(props) {
    return (
      <View style={styles.square}>
        
        <Text style={styles.clientName}>{props.children}</Text>
      </View>
)}

const styles = StyleSheet.create({
  square: {
   
    height: 208,
    backgroundColor: "#000000",
    borderBottomRightRadius:40,
    flexDirection: 'row',
  },
  clientName: {
    fontSize: 19,
    fontWeight:600,
    color: '#fff'
  }
});