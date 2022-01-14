
import React from 'react';

import info from '../../utils/info/me';
import ILang from '../../interface';

const Me: React.FC<{ lang: string }> = ({ lang }): JSX.Element => {
    return (
        <div className='container_me'>
            <p> { info[ lang as keyof ILang ] } </p>
        </div>
    )
}

export default Me;