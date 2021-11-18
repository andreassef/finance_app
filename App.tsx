import React from 'react';
import AppLoading from 'expo-app-loading';
import theme from './src/global/styles/theme';

import { ThemeProvider } from 'styled-components';
import { Dashboard } from './src/screens/Dashboard';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });


  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>    
  );
}