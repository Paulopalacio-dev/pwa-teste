import * as React from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import CardButton from '../components/Button/CardButton';
import HeaderBase from '../components/Header/HeaderBase';
import TextTittle from '../components/TextTittle';


export default function Home() {


  return (
    <SafeAreaView style={{ flex:1, minHeight:812}}>
      <HeaderBase name={'José Felipe'}/>
      <ScrollView >
        <TextTittle>Oportunidades</TextTittle>
        <View style={{ flex:1, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}}>
          <CardButton 
          image={require('../../assets/images/newLoan-2.png')}
          tittle={'Novo Emprestimo'}
          value={'2000,00'}
          />
          <CardButton 
          image={require('../../assets/images/portability-2.png')}
          tittle={'Portabilidade'}
          value={'2000,00'}
          />
          <CardButton
          image={require('../../assets/images/refinancing-2.png')}
          tittle={'Refinanciamento'}
          value={'2000,00'}
          />
          <CardButton
          image={require('../../assets/images/creditCard-2.png')}
          tittle={'Cartão de crédito consignado'}
          
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}