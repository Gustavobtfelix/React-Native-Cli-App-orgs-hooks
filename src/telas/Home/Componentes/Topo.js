import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import logoOrgsImagem from '../../../../assets/logoOrgs.png';
import useTopo from '../../../hooks/useTopo';



function Topo() {
    const [titulo, descricao] = useTopo();

    return <>
       <View style={estilos.Topo}>
       <Image source={logoOrgsImagem} style={estilos.logoOrgs}/>
       <Text style={estilos.BoasVindas}> {titulo} </Text>
       <Text style={estilos.legenda}> {descricao} </Text>
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
        color: '#464646',
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3',
    }
  })
  
  export default Topo;