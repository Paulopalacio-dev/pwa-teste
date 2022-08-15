import * as React from 'react';
import { View, StyleSheet, Text} from 'react-native';


export default function MonthButton(props) {
    return (
      <View style={styles.square}>
        <Text style={styles.text}> {props.value} meses</Text>
      </View>
)}

const styles = StyleSheet.create({
  square: {
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    width:165,
    height: 58,
    borderRadius:10,
    backgroundColor: "#fff",
    shadowColor: '#5B5B5B33',
    shadowOffset: {width: -5, height: 5},
    shadowOpacity: 0.50,
    shadowRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#000'
  },
  value: {
    paddingBottom:10,
    fontSize: 12,
    color: 'rgba(210,38,136,1)'
  },
});