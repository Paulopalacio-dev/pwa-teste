import * as React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';


export default function CardButton(props) {
    return (
      <View style={styles.square}>
         <Image
        style={styles.tinyLogo}
        source={props.image}
      />
        <Text style={styles.text}>{props.tittle}</Text>
        <Text style={styles.value}>Até R$ {props.value}</Text>
      </View>
)}

const styles = StyleSheet.create({
  square: {
    margin:8,
    padding:15,
    paddingBottom:30,
    width:162,
    height: 163,
    borderRadius:20,
    backgroundColor: "#fff",  
  },
  text: {
    fontSize: 14,
    fontWeight:600,
    color: '#000'
  },
  value: {
    paddingBottom:10,
    fontSize: 12,
    color: 'rgba(210,38,136,1)'
  },
  tinyLogo: {
    marginVertical:15,
    padding:25,
    width: 43,
    height: 43,
  },
});