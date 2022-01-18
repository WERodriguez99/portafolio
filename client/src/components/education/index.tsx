
import React from 'react';

import info from '../../utils/info/education';
import Table from './element';

const Education: React.FC = (): JSX.Element => {
    return (
        <div className='container_education' id='education'>
            { info.map((el, index) => <div key={index}> <Table type={el.type} name={el.name} title={el.title} year={el.year} /> </div>) }
        </div>
    )
}

export default Education;