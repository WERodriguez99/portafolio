
import React from 'react';

import info from '../../utils/info/contact';
import Metod from './metod';
import ILang from '../../interface';

import './index.scss';

const Contact: React.FC<{ lang: string }> = ({lang}): JSX.Element => {
    return (
    
        <div className={'container_contact'}>
            <h2> {info[ lang as keyof ILang ]} </h2>

            <div className='container_metods'>
                {
                    info.waysToContact.map( (el, index) => <div className='container_metod' ><Metod key={index} icon={el.icon} url={el.url} name={el.name} /> </div>
                    )
                }
            </div>
        </div>
    
    )
}

export default Contact;