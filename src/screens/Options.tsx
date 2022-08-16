import  React, {useState} from 'react';
import { View, } from 'react-native';

import CenterTittle from '../components/Header/CenterTittle';
import TextTittle from '../components/TextTittle';
import OptionContractButton from '../components/Button/OptionContractButton';


export default function options() {

 
  return (
    <View style={{  justifyContent: 'center' }}>
      <CenterTittle tittle={'Opções'}/>
      <TextTittle subtittle={'Escolha um banco.'}/>
      <View style={{ flex:1, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}}>
        <OptionContractButton
        installments={'60'}
        value={'R$372,60'}
        textTotal={'5.300,00'}/>
      </View>
    </View>
  );
}