import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function CenterTittle(props:any) {
    return (
      <View style={styles.square}>
        <View style={styles.image}>
          <MaterialCommunityIcons name="chevron-left" size={30} color="#FFFFFF" 
         
        />
          
        </View>
          <Text style={styles.tittle}>{props.tittle}</Text>
      </View>
)}

const styles = StyleSheet.create({
  square: {
    height: 100,
    backgroundColor: "#000000",
    borderBottomRightRadius:40,
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    position:'absolute',
    left:15,
   
  },
  tittle: {
    position:'absolute',
    fontSize: 17,
    fontWeight:400,
    color: '#FFFFFF'
  }
});