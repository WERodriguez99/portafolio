
import React from 'react';

import info from '../../utils/info/inicio';
import ILang from '../../interface';
import profile from '../../Images/profile.jpg'

import './index.scss';

const Inicio: React.FC<{ lang: string }> = ({ lang }): JSX.Element => {
    return (
        <div className='container_inicio' id='/'>
            <img src={profile} alt="profile" />
            <h2> {info[ lang as keyof ILang ].greeting} </h2>
            <p> {info[ lang as keyof ILang ].presentation} </p>
        </div>
    )
}

export default Inicio