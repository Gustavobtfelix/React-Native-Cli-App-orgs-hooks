import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


function ListaDeProdutos({nome, imagem, distancia, estrelas}) {
  return <View style={estilos.caixaCSS}>
                 
                <Image source={imagem} accessibilityLabel={nome} style={estilos.imagemCSS}/>
                <View style={estilos.listaCSS}>
                    <Text style={estilos.nomeCSS}> {nome} </Text>
                    <Text style={estilos.distancia}>{distancia}</Text>
                </View>
                <Text>{estrelas}</Text>
                 
  </View>;
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