import React from 'react'
import Routes from './src/routes'
import AppLoading from 'expo-app-loading'
import { useFonts, Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold} from '@expo-google-fonts/montserrat'

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
   <Routes />
  );
}

