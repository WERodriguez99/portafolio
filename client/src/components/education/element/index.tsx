
import React from 'react';

import IEducation from '../../../interface/education';

const Table: React.FC<IEducation> = ({ type, name, title, year }): JSX.Element => {
    return (
        <div>
            <div id='container_type'>
                <h3> {type} </h3>
            </div>

            <div id='info_education'>
                <span> {name} </span>
                <span> {title} </span>
                <span> {year} </span>
            </div>


        </div>
    )
}

export default Table;