import  React from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';


export default function OptionContractButton(props:any) {
    return (
      <TouchableOpacity>
      <SafeAreaView style={styles.square}>
        <View style={styles.topSquare}>
          <View style={styles.containerLogo}>
            <Image
              style={styles.tinyLogo}
              source={require('../../../../assets/images/meutudo.png')}
            />
          </View>
          <View>
            <Text style={styles.textInstallments}>{props.installments} parcelas de</Text>
            <Text style={styles.value}>{props.value}</Text>
            <Text style={styles.textTotal}>Total de R$ {props.textTotal}</Text>
          </View>
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <Text style={styles.textTax}>com taxa de</Text>
            <Text style={styles.valueTax}>1,3% ao mês</Text>
          </View>
        </View>
        <View style={styles.bottomSquare}>
          <Text style={styles.textTax}>Previsão de pagamento</Text>
          <Text style={styles.valueTax}>19 de agosto a 22 de setembro de 2022</Text>
          <Text style={styles.continueButton}>Contratar ></Text>
        </View>
              </SafeAreaView>
      </TouchableOpacity>
)}

const styles = StyleSheet.create({
  square: {
    margin:8,
    width:345,
    height: 203,
    borderRadius:15,
    backgroundColor: "#fff",
    shadowColor: '#5B5B5B33',
    shadowOffset: {width: -5, height: 5},
    shadowOpacity: 0.50,
    shadowRadius: 10,
  },
  containerLogo:{
    alignItems:'center',
    justifyContent:'center',
    width:63,
    height:63,
    borderColor:'rgba(0, 0, 0, 0.5)',
    borderRadius:10,
    borderWidth:0.5,
  },
  topSquare:{
    padding:25,
    flexDirection:'row'
  },
  bottomSquare:{
    paddingTop:10,
    flexDirection:'column',
    borderTopColor:'rgba(0,0,0,0.1)',
    borderTopWidth:.5,
    marginLeft:15,
    marginRight:15,
  },
  line:{
    width:5,
    height: 190,
    backgroundColor: "#D22688",
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15,
    position:'absolute',
    justifyContent:'center'
  },
  textInstallments: {
    fontSize: 12,
    fontWeight:'bold',
    color: '#000000',
    paddingLeft:15,
  },
  value: {
    fontSize: 18,
    color: '#D22688',
    fontWeight:'bold',
    paddingLeft:15,
  },
  textTotal:{
    fontSize: 12,
    color: '#000000',
    paddingLeft:15,
  },
  textTax:{
    fontSize:12,
    color: '#000000',
    paddingLeft:15,
  },
  valueTax: {
    fontSize: 12,
    color: '#000000',
    fontWeight:'bold',
    paddingLeft:15,
  },
  continueButton:{
    fontSize: 13,
    fontWeight:'bold',
    color: '#D22688',
    paddingLeft:15,
    position:'absolute',
    right:0,
    bottom:-20,
  },
  tinyLogo: {
    marginVertical:15,
    padding:25,
    width: 28,
    height: 28,
  },
});