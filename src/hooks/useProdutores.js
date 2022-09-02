import { useState, useEffect } from "react";
import { carregaProdutores } from '../servicos/carregaDados';

function useProdutores () {
    const [titulo, setTitulo] = useState("Carregando..."); //titulo é o estado, setTitulo é a função que altera o estado, Carregando... é o valor inicial
    const [lista, setLista] = useState([]);

    
    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.tituloTXT);
        setLista(retorno.listaTXT);
    }, []); // useeffect com [] = array vazio = executa uma vez / useEffect : https://pt-br.reactjs.org/docs/hooks-effect.html

    return [titulo, lista]
}

export default useProdutores;