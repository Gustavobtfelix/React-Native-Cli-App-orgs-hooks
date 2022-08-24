import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import logoOrgsImagem from '../../../../assets/logoOrgs.png';
import { carregaTopo } from '../../../servicos/carregaDados';



class Topo extends React.Component{ //extends herda as propriedades de outra classe
    state = {
        topo: {
            boasVindasTXT: '',
            legendaTXT: '',
        }
    }

    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({ topo: retorno }); // setState atualiza as informações se ouver alguma alteração no topo
    }

    componentDidMount() { //é um metodo que é executado somente uma vêz
        this.atualizaTopo();        
    }

    render() { //render é um metodo obrigatorio para criar um componente
        return <>
            <View style={estilos.Topo}>
                <Image source={logoOrgsImagem} style={estilos.logoOrgs}/>
                <Text style={estilos.BoasVindas}>{this.state.topo.boasVindasTXT}</Text>
                <Text style={estilos.legenda}>{this.state.topo.legendaTXT}</Text>
            </View>
        </>
    }
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