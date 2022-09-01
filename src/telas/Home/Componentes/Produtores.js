import React, { useEffect, useState } from 'react'; // 
import { FlatList, StyleSheet, Text } from 'react-native';

import { carregaProdutores } from '../../../servicos/carregaDados';
import Lista from './Componentes2/ProdutoresLista';

function Produtores({ topo: Topo }){ //Topo é o componente que vem do componente pai

    const [titulo, setTitulo] = useState("Carregando..."); //titulo é o estado, setTitulo é a função que altera o estado
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.tituloTXT);
        setLista(retorno.listaTXT);
    }, []); // useeffect com [] = array vazio = executa uma vez / useEffect : https://pt-br.reactjs.org/docs/hooks-effect.html

    const TituloLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{ titulo }</Text>
        </>
    };
    

    return <FlatList 
        data={lista}
        //renderItem={({item: {nome}}) => <Text>{ nome}</Text>}
        renderItem={({item}) => <Lista {...item} />} //item é o array com os valores da lista
        KeyExtractor={({ nome }) => nome}
        ListHeaderComponent={TituloLista} />
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold",
        color: '#464646',
    },
    lista: {

    }
})

export default Produtores;