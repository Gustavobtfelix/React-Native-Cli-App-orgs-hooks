import green from '../../assets/produtores/green.png';
import grow from '../../assets/produtores/grow.png';
import jennyJack from '../../assets/produtores/jenny-jack.png';
import potager from '../../assets/produtores/potager.png';
import salad from '../../assets/produtores/salad.png';

const gerarNumeroAleatorio = (min, max) => {
    const numero = Math.random() * (max - min) + min; //gera numero randomico entre min e max
    return Math.floor(numero); //arredonda numero
}

const produtoresTXT = {
    tituloTXT: 'Produtores',
    listaTXT: [
        {
            nome: "Green",
            imagem: green,
            distancia: `Distância: ${gerarNumeroAleatorio(1, 500)}m`, // ${}m = método de adicionar js na string
            estrelas: gerarNumeroAleatorio(0, 5),
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia: `Distância: ${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(0, 5),
        },
        {
            nome: "Jenny Jack Farm",
            imagem: jennyJack,
            distancia: `Distância: ${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(0, 5),
        },
        {
            nome: "Potager",
            imagem: potager,
            distancia: `Distância: ${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(0, 5),
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: `Distância: ${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(0, 5),
        },
    ]
} 

export default produtoresTXT;