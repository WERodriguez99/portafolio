
import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Contact } from '../../../interface/contact';

const Metod: React.FC<Contact> = ({ icon, url, name }): JSX.Element => {

    return (
        <>
             <a className={'metod'} href={url} rel="noreferrer" target="_blank">    
            <FontAwesomeIcon icon={icon}  id={'icon'} />
            <span>{name}</span>     
        </a>
        </>
    )
}

export default Metod