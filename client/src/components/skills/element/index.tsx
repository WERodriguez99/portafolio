
import React from 'react';

import './index.scss'

const Element: React.FC<{ title: string, img: string }> = ({ title, img }): JSX.Element => {
    return (
        <>
            <img src={img} alt={`Image ${title}`} />
            <span id='title'>{title}</span>
        </>
    )
}

export default Element;