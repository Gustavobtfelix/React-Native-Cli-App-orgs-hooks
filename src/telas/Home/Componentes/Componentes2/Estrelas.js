import React, { useState } from "react";
import {StyleSheet, View } from "react-native";
import ComportamentoEstrela from './Componentes3/ComportamentoEstrela';

function Estrelas({ //parametros
    quantidade: quantidadeOrigem, //quantidade vem de ProdutoresLista.js
    editavel = false,
    grande = false,
}) { //retorno
    const [ quantidade, setQuantidade ] = useState(quantidadeOrigem);

    const RenderEstrelas = () => {
        const listaEstrelas = [];
        for (let i=0; i<5; i++) {
            listaEstrelas.push(
                <ComportamentoEstrela 
                    key={i}
                    onPress={() => setQuantidade(i)} /*a quantidade define o valor de estrelas */ 
                    desabilitada={!editavel} /*envia valor */
                    quantidadeEstrelas={i <= quantidade}
                    grande={grande} />
            );
        } // for para criar array com C omportamentoEstrela
        return listaEstrelas; //retorna array
    }

    return <View style={estilos.posicaoEstrelasCSS}>
        <RenderEstrelas />
    </View> //return principal
}


const estilos = StyleSheet.create({ 
    posicaoEstrelasCSS: {
        flexDirection: "row",
    },
});

export default Estrelas;