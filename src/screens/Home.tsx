import  React, {useState} from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import CardButton from '../components/Button/CardButton';
import HeaderBase from '../components/Header/HeaderBase';
import TextTittle from '../components/TextTittle';



export default function Home({navigation}:{navigation:any}) {
  const [values, setValue] = useState('');

  const getDataValue = () => {
    const endpoint = `https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test`;

    fetch(endpoint)
      .then(response => response.json())
        .then( data => {
          const dataValue = {
            newLoanMaxValue: data.newLoanMaxValue,
            portabilityMaxValue: data.portabilityMaxValue,
            refinMaxValue:data.refinMaxValue,
            creditCardMaxValue:data.creditCardMaxValue
          };
          setValue(dataValue);
        })
     }
  getDataValue()

 

  return (
    <SafeAreaView style={{ flex:1, minHeight:812}}>
      <HeaderBase 
      name={'José Felipe'}
      value={values.newLoanMaxValue}
      />
      <ScrollView >
        <TextTittle subtittle={'Oportunidades'}
        ></TextTittle>
        <View style={{ flex:1, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}}>
          <CardButton 
          image={require('../../assets/images/newLoan-2.png')}
          tittle={'Novo Emprestimo'}
          value={values.newLoanMaxValue}
          onPress={() => navigation.navigate('Values')}
          />
          <CardButton 
          image={require('../../assets/images/portability-2.png')}
          tittle={'Portabilidade'}
          value={values.portabilityMaxValue}
          />
          <CardButton
          image={require('../../assets/images/refinancing-2.png')}
          tittle={'Refinanciamento'}
          value={values.refinMaxValue}
          />
          <CardButton
          image={require('../../assets/images/creditCard-2.png')}
          tittle={'Cartão de crédito consignado'}
          value={values.creditCardMaxValue}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}