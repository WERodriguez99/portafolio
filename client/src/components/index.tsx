
import React, { useState } from 'react';

import Nav from './nav';
import Inicio from './inicio';
import Me from './me';
import Skills from './skills';
import Proyects from './proyects';
import Education from './education';
import Contact from './contact';
import Img from './img';

import info from '../utils/info/img';

import './index.scss';

const Home: React.FC = (): JSX.Element => {

    const [ lang, setLang ] = useState("ESP");

    return (
        <div className='home'>
            <Nav lang={lang} setLang={setLang}/>
            <Inicio lang={lang}/>
            <Me lang={lang}/>
            <Img img={info[0].img} className={info[0].ClssN}/>
            
            <Skills/>
            <Proyects lang={lang}/>
            <Education/>
            <Contact lang={lang} />
        </div>
    )
}  

export default Home;