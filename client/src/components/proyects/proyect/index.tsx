
import React from 'react';

const Proyect: React.FC<{ title: string, text: string, img: string }> = ({ title, text, img }): JSX.Element => {
    return (
        <>
            <img src={img} alt={`img ${title}`} />
            <p> {text} </p>
        </>
    )
} 

export default Proyect;