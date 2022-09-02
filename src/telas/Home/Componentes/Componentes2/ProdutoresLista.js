import React, { useReducer, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Estrelas from './Estrelas';


function ListaDeProdutos({nome, imagem, distancia, estrelas}) {  
    // const [selecionado, setSelecionado] = useState(false); //Muda botão de grande para pequeno no <Estrelas>
    const [selecionado, inverterSelecionado] = useReducer(
                                                         (selecionado) => !selecionado,
                                                          false); //Muda botão de grande para pequeno no <Estrelas>

    return <TouchableOpacity style={estilos.caixaCSS} onPress={() => inverterSelecionado()} /*setSelecionado(!selecionado)*/ >  

                  <Image source={imagem} accessibilityLabel={nome} style={estilos.imagemCSS}/>
                  <View style={estilos.listaCSS}>
                      <View>
                          <Text style={estilos.nomeCSS}> {nome} </Text>
                          <Estrelas quantidade={ estrelas } editavel={ selecionado } grande={ selecionado }/>
                      </View>
                      <Text style={estilos.distancia}>{distancia}</Text>                    
                  </View>

    </TouchableOpacity>;
}

const estilos = StyleSheet.create({
    caixaCSS: {
        flexDirection: "row",
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 16,
        //Android
        elevation: 4,

        //iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    imagemCSS: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    listaCSS: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nomeCSS: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    },
});

export default ListaDeProdutos;