import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

export default function CardButton(props:any) {
    return (
      <TouchableOpacity onPress={()=> navigation.navigate('Values')} >
      <View style={styles.square}>
        <Image
          style={styles.tinyLogo}
          source={props.image}
        />
        <Text style={styles.text}>{props.tittle}</Text>
        <Text style={styles.value}>Até R$ {props.value}</Text>
      </View>
      </TouchableOpacity>
      
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
    shadowColor: '#5B5B5B33',
    shadowOffset: {width: -5, height: 5},
    shadowOpacity: 0.50,
    shadowRadius: 10,
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