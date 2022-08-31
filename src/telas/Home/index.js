import React from 'react';
import Topo from './Componentes/Topo';
import Produtores from './Componentes/Produtores';

function Home() {
    return (
        <>
        
        <Produtores topo = {Topo}/>
        </>
    );
}

export default Home;