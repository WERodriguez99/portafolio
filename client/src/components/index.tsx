
import React, { useState } from 'react';

import Nav from './nav';
import Inicio from './inicio';
import Me from './me/inicio';
import Skills from './skills';
import Proyects from './proyects';
import Education from './education';

const Home: React.FC = (): JSX.Element => {

    const [ lang, setLang ] = useState("ENG")

    return (
        <div>
            <Nav lang={lang} setLang={setLang}/>
            <Inicio lang={lang}/>
            <Me lang={lang}/>
            <Skills/>
            <Proyects lang={lang}/>
            <Education/>
        </div>
    )
}  

export default Home;