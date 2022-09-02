import green from '../../assets/produtores/green.png';
import grow from '../../assets/produtores/grow.png';
import jennyJack from '../../assets/produtores/jenny-jack.png';
import potager from '../../assets/produtores/potager.png';
import salad from '../../assets/produtores/salad.png';

const gerarNumeroAleatorio = (min, max) => {
    const numero = Math.random() * (max - min) + min; //gera numero randomico entre min e max
    return  Math.floor(numero); //arredonda numero
}

const geraDistancia = () => {
    return `Distância: ${gerarNumeroAleatorio(1, 500)}m`  // ${}m = método de adicionar js na string
}
const geraEstrelas = () => {
    return gerarNumeroAleatorio(0, 5)
}

const produtoresTXT = {
    tituloTXT: 'Produtores',
    listaTXT: [
        {
            nome: "Green",
            imagem: green,
            distancia: geraDistancia(),
            estrelas: geraEstrelas(),
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia: geraDistancia(),
            estrelas: geraEstrelas(),
        },
        {
            nome: "Jenny Jack Farm",
            imagem: jennyJack,
            distancia: geraDistancia(),
            estrelas: geraEstrelas(),
        },
        {
            nome: "Potager",
            imagem: potager,
            distancia: geraDistancia(),
            estrelas: geraEstrelas(),
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: geraDistancia(),
            estrelas: geraEstrelas(),
        },
    ]
} 

export default produtoresTXT;