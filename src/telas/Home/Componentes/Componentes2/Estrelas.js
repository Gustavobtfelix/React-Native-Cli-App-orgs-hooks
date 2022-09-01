import React, { useState } from "react";
import {Image, StyleSheet, TouchableOpacity, View } from "react-native";
import estrelaIMG from '../../../../../assets/estrela.png';
import estrelaCinzaIMG from '../../../../../assets/estrelaCinza.png';

function Estrelas({ //parametros
    quantidade: quantidadeOrigem, //quantidade vem de ProdutoresLista.js
    editavel = false,
    grande = false,
}) { //retorno
    const [ quantidade, setQuantidade ] = useState(quantidadeOrigem);
    const estadosEstilos = estilosFuncao(grande); 

    const getImage = (index) => {
        if (index < quantidade) {
            return estrelaIMG;
        }
        return estrelaCinzaIMG
    }//metodo para selecionar imagem

    const RenderEstrelas = () => {
        const listaEstrelas = [];
        for (let i=0; i<5; i++) {
            listaEstrelas.push(
                <TouchableOpacity
                    key={i}
                    onPress={() => setQuantidade(i+1)} //se clicar na estrela, seta a quantidade
                    disabled={!editavel}>
                    <Image source={getImage(i)} style={estadosEstilos.estrelaCSS} />
                </TouchableOpacity>
                
            );
        }
        return listaEstrelas; // metodo que cria array com as imagens
    }

    return <View style={estadosEstilos.posicaoEstrelasCSS}>
        <RenderEstrelas />
    </View> //return principal
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