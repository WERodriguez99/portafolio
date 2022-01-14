
import React from 'react';

const Element: React.FC<{ title: string, img: string }> = ({ title, img }): JSX.Element => {
    return (
        <>
            <img src={img} alt={`Image ${title}`} />
            <span>{title}</span>
        </>
    )
}

export default Element;