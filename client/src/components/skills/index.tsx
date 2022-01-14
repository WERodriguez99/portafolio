
import React from 'react';

import Element from './element';
import info from '../../utils/info/skills';

const Skills: React.FC = (): JSX.Element => {
    return (
        <div className='container_skills'>
            {info.map((el, index) => <div key={index}> <Element title={el.title} img={el.img} /> </div> )}
        </div>
    )
}

export default Skills;