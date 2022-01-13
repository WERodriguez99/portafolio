
import React, { useState } from 'react';

import Nav from './nav';
import Inicio from './inicio';

const Home: React.FC = (): JSX.Element => {

    const [ lang, setLang ] = useState("ENG")

    return (
        <div>
            <Nav lang={lang} setLang={setLang}/>
            <Inicio lang={lang}/>
        </div>
    )
}  

export default Home;