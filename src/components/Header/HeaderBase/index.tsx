import * as React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function HeaderBase(props) {
    return (
      <View style={styles.square}>
        <View style={styles.image}>
          <Image 
            style={styles.tinyLogo}
            source={require('../../../../assets/images/meutudo.png')}
            />
          <MaterialCommunityIcons name="bell-outline" size={30} color="#FFFFFF" />
        </View>
          <Text style={styles.clientName}>Olá, {props.name}</Text>
          <Text style={styles.textValue}>Seu crédito disponível é de</Text>
          <Text style={styles.value}>R$ {props.value}</Text>
        <View style={{  position: 'absolute', justifyContent: 'flex-end', bottom:-15}}>
          <Ionicons name="chevron-down-circle" size={35} color="#D22688" />
        </View>
      </View>
)}

const styles = StyleSheet.create({
  square: {
    height: 208,
    backgroundColor: "#000000",
    borderBottomRightRadius:40,
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    position:'absolute',
    left:15,
    right:15,
    top:30,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row'
  },
  clientName: {
    paddingTop:60,
    fontSize: 19,
    fontWeight:600,
    color: '#FFFFFF'
  }, 
  textValue: {
    paddingTop:20,
    border:1,
    fontSize: 14,
    color: '#FFFFFF'
  }, 
  value: {
    fontSize:30,
    fontWeight:'bold',
    color: '#D22688'
  },
  tinyLogo: {
    minWidth:30,
    padding:30,
  },
});