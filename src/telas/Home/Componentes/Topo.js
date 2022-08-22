import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import logoOrgsImagem from '../../../../assets/logoOrgs.png';



function Topo({boasVindasTXT, legendaTXT}) {
    return <>
       <View style={estilos.Topo}>
       <Image source={logoOrgsImagem} style={estilos.logoOrgs}/>
       <Text style={estilos.BoasVindas}>{boasVindasTXT}</Text>
       <Text style={estilos.legenda}>{legendaTXT}</Text>
       </View>
    </>
  }
  
  
  const estilos = StyleSheet.create({
    Topo: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    logoOrgs: {
        width: 70,
        height: 28,
    },
    BoasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
    }
  })
  
  export default Topo;