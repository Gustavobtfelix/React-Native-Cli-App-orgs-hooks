import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';

import Home from './src/telas/Home/index';
import mock from './src/mocks/topo'

function App() {
  return <>
    <SafeAreaView style={estilos.tela}>
      <Home {...mock}/>
    </SafeAreaView> 
  </>
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1, //ocupa todo o espaço da tela
  },
})
export default App;