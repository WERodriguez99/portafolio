
import React from 'react';

import IEducation from '../../../interface/education';

const Table: React.FC<IEducation> = ({ type, name, title, year }): JSX.Element => {
    return (
        <table>
            <tbody>
                <tr>{name}</tr>
                <tr>{title}</tr>
                <tr>{year}</tr>
            </tbody>
        </table>
    )
}

export default Table;