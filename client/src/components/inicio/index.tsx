
import React from 'react';

import info from '../../utils/info/inicio';
import ILang from '../../interface';

const Inicio: React.FC<{ lang: string }> = ({ lang }): JSX.Element => {
    return (
        <div>
            <h2> {info[ lang as keyof ILang ].greeting} </h2>
            <p> {info[ lang as keyof ILang ].presentation} </p>
        </div>
    )
}

export default Inicio