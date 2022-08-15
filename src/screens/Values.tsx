import  React, {useState} from 'react';
import { View, } from 'react-native';
import ValueButton from '../components/Button/ValueButton';
import CenterTittle from '../components/Header/CenterTittle';
import TextTittle from '../components/TextTittle';
import TextButton from '../components/Button/TextButton';
import LinkButton from '../components/Button/LinkButton';
import InputValue from '../components/Input/InputValue';


export default function Values() {

  const [values, setValues] = useState('');

  const getDataValue = () => {
    const endpoint = `https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test/values`;

    fetch(endpoint)
      .then(response => response.json())
        .then( data => {
          const dataValue = {
            maxValue: data.max,
            minValue: data.min,
            sugestionValue1:data.suggestionValues[1],
            sugestionValue2:data.suggestionValues[2],
          };
          setValues(dataValue);
        })
     }
  getDataValue()

  return (
    <View style={{  justifyContent: 'center' }}>
      <CenterTittle tittle={'Valores'}/>
      <TextTittle subtittle={'De quanto você precisa?'}/>
      <View style={{ flex:1, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}}>
        <ValueButton value={values.minValue}/>
        <ValueButton value={values.sugestionValue2}/>
        <ValueButton value={values.sugestionValue1}/>
        <ValueButton value={values.maxValue}/>
        
        <InputValue subtittle={'Outro valor   '}/>
        
      </View>
      <View style={{ alignItems: 'center'}}>
      <TextButton />
      <LinkButton link={'Simule sua parcela'}/>
      </View>
      
    </View>
  );
}