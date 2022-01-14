
import React from 'react';

const Proyect: React.FC<{ title: string, text: string, img: string }> = ({ title, text, img }): JSX.Element => {
    return (
        <>
            <h2> {title} </h2>
            <p> {text} </p>
            <img src={img} alt={`img ${title}`} />
        </>
    )
} 

export default Proyect;