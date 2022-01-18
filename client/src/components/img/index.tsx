
import React from 'react';

import './index.scss';

const Img: React.FC<{img: string, className: string}> = ({img, className}):JSX.Element => {
    return (
        <div className={className}>
            <img src={img} alt="imagen random" />
        </div>
    )
}

export default Img