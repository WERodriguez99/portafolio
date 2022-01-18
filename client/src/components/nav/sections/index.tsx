
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

const Section: React.FC<{ icon: IconDefinition, text: string, id: number, path: string }> = ({ icon, text, path, id }): JSX.Element => {
    return (
        <>
        <a href={`#${path}`}>
            < FontAwesomeIcon icon={icon} />
            {text}
        </a>
        </>
    )
};

export default Section;