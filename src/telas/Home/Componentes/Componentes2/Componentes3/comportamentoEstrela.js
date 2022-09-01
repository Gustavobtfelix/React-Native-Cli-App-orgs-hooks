import React from "react";
import {Image, StyleSheet, TouchableOpacity} from "react-native";
import estrelaIMG from '../../../../../../assets/estrela.png';
import estrelaCinzaIMG from '../../../../../../assets/estrelaCinza.png';

function ComportamentoEstrela({
    onPress,
    desabilitada = true,
    grande = false,
    quantidadeEstrelas,
}) {
    const estilos = estilosFuncao(grande); 

    const getImagem = () => {
        if (quantidadeEstrelas) {
            return estrelaIMG;
        }
        return estrelaCinzaIMG
    }//metodo para selecionar imagem

    return <TouchableOpacity
            onPress={onPress} //se clicar na estrela, seta a quantidade
            disabled={desabilitada}>
            <Image source={getImagem()} style={estilos.estrelaCSS} />
        </TouchableOpacity>
} //metodo monta estrela

const estilosFuncao = (grande) => StyleSheet.create({ 
    estrelaCSS: {
        width:  grande ? 36 : 12, // se grande for true, usa 36, se não, usa 12
        height: grande ? 36 : 12,
        marginTop: 16,
    }
});

export default ComportamentoEstrela;