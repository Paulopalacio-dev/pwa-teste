import * as React from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import CardButton from '../components/Button/CardButton';
import Container from '../components/Container';
import TextTittle from '../components/TextTittle';


export default function Home() {


  return (
    <SafeAreaView style={{ flex:1, 
       height:812}}>
      <Container/>
      
      <ScrollView >
      <TextTittle style={{   }}>Oportunidades</TextTittle>
        <View style={{ flex:2, flexDirection:'row', flexWrap:'wrap', justifyContent:'center'  }}>
          <CardButton 
          image={require('../../assets/images/newLoan-2.png')}
          tittle={'Novo Emprestimo'}
          value={'2000,00'}
          />
          <CardButton 
          image={require('../../assets/images/newLoan-2.png')}
          tittle={'Portabilidade'}
          value={'2000,00'}
          />
          <CardButton
          image={require('../../assets/images/newLoan-2.png')}
          tittle={'Refinanciamento'}
          value={'2000,00'}
          />
          <CardButton
          image={require('../../assets/images/newLoan-2.png')}
          tittle={'Cartão de crédito consignado'}
          
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}