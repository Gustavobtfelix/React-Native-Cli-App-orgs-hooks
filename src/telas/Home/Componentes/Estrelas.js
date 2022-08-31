import React, { useState } from "react";
import { Text, Image, StyleSheet, View } from "react-native";
import estrelaIMG from '../../../../assets/estrela.png';
import estrelaCinzaIMG from '../../../../assets/estrelaCinza.png';

function Estrelas({ //parametros
    quantidade: quantidadeOrigem,
    editavel = false,
    grande = false,
}) { //retorno
    const estadosEstilos = estilosFuncao(grande); 
    return <View style={estadosEstilos.posicaoEstrelasCSS}>
        <Image source={estrelaIMG} style={estadosEstilos.estrelaCSS} />
        <Image source={estrelaCinzaIMG} style={estadosEstilos.estrelaCSS} />
    </View>
}


const estilosFuncao = (grande) => StyleSheet.create({ 
    posicaoEstrelasCSS: {
        flexDirection: "row",
    },
    estrelaCSS: {
        width:  grande ? 36 : 12, // se grande for true, usa 36, se não, usa 12
        height: grande ? 36 : 12,
        marginTop: 16,
    }
});

export default Estrelas;