import { useState, useEffect } from "react";
import { carregaTopo } from '../servicos/carregaDados';

function useTopo () {
    const [titulo, setTitulo] = useState("Carregando...");
    const [descricao, setDescricao] = useState("Carregando...");

    
    useEffect(() => {
        const retorno = carregaTopo();
        setTitulo(retorno.boasVindasTXT);
        setDescricao(retorno.legendaTXT);
    }, []); // useeffect com [] = array vazio = executa uma vez / useEffect : https://pt-br.reactjs.org/docs/hooks-effect.html

    return [titulo, descricao]
}

export default useTopo;