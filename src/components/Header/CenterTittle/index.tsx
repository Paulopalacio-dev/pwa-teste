import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function CenterTittle(props:any) {
    return (
      <View style={styles.square}>
        <TouchableOpacity 
        style={styles.image}
        onPress={()=> navigation.goBack()}>
          <MaterialCommunityIcons name="chevron-left" size={30} color="#FFFFFF" />
        </TouchableOpacity>
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