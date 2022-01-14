
import React, { Dispatch, SetStateAction } from 'react';

import Section from './sections';
import info from '../../utils/info/nav';

import { data } from '../../interface/nav';

import './index.scss';

const Nav: React.FC<{ lang: string, setLang: Dispatch<SetStateAction<string>> }> = ({ lang ,setLang }): JSX.Element => {
    
    return (
        <div className='container_nav'>
            {info.map((el, index) => <div key={index} className='container_icon'> < Section icon={el.icon} id={index} text={el.data[ lang as keyof data ]} /> </div>)}

            <h3 onClick={ ()=> setLang(lang === "ENG" ? "ESP" : "ENG") } >{lang}</h3>
        </div>
        )
}

export default Nav;