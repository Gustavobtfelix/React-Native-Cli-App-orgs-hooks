import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import Home from './src/telas/Home/index';
import mock from './src/mocks/topo'

function App() {
  return <>
    <SafeAreaView>
      <Home {...mock}/>
    </SafeAreaView> 
  </>
}

export default App;