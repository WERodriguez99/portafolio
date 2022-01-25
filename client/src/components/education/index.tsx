
import React from 'react';

import info from '../../utils/info/education';
import Table from './element';

import './index.scss';

const Education: React.FC = (): JSX.Element => {
    return (
        <div className='container_education'>
            { info.map((el, index) => <div key={index} className='education'> <Table type={el.type} name={el.name} title={el.title} year={el.year} /> </div>) }
        </div>
    )
}

export default Education;