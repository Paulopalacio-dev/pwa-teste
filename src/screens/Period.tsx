import  React, {useState} from 'react';
import { View, } from 'react-native';

import CenterTittle from '../components/Header/CenterTittle';
import TextTittle from '../components/TextTittle';
import TextButton from '../components/Button/TextButton';
import InputMonth from '../components/Input/InputMonth';
import MonthButton from '../components/Button/MonthButton';


export default function Period() {

  const [values, setValues] = useState('');

  const getDataValue = () => {
    const endpoint = `https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test/installments`;

    fetch(endpoint)
      .then(response => response.json())
        .then( data => {
          const dataValue = {
            maxValue: data.max,
            minValue: data.min,
            sugestionInstallments1:data.suggestionInstallments[1],
            sugestionInstallments2:data.suggestionInstallments[2],
          };
          setValues(dataValue);
        })
     }
  getDataValue()

  return (
    <View style={{  justifyContent: 'center' }}>
      <CenterTittle tittle={'Período'}/>
      <TextTittle subtittle={'Em quanto tempo você quer pagar?'}/>
      <View style={{ flex:1, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}}>
        <MonthButton value={values.minValue}/>
        <MonthButton value={values.sugestionInstallments2}/>
        <MonthButton value={values.sugestionInstallments1}/>
        <MonthButton value={values.maxValue}/>
        
        <InputMonth subtittle={'   Meses'}/>

      </View>
      <View style={{ alignItems: 'center'}}>
      <TextButton />
      </View>
      
    </View>
  );
}