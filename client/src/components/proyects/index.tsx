
import React from 'react';

import info from '../../utils/info/proyects';
import ILang from '../../interface';
import Proyect from './proyect';

const Proyects: React.FC<{ lang: string }> = ({ lang }): JSX.Element => {
    return (
        <div className='container_proyects'>
            { info.map((el, index) => <div key={index}> <Proyect title={el.title} img={el.img} text={el[ lang as keyof ILang ]} /> </div> )}
        </div>
    )
}

export default Proyects;