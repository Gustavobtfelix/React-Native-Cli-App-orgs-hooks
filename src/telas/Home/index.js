import React from 'react';
import Topo from './Componentes/Topo';

function Home(topoTXT) {
    return (
        <>
        <Topo {...topoTXT}/>
        </>
    );
}

export default Home;