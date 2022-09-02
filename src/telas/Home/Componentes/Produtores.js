import React from 'react'; // 
import { FlatList, StyleSheet, Text } from 'react-native';

import useProdutores from '../../../hooks/useProdutores';
import Lista from './Componentes2/ProdutoresLista';

function Produtores({ topo: Topo }){ //Topo é o componente que vem do componente pai

    const [titulo, lista] = useProdutores();

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