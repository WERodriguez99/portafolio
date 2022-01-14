
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

const Section: React.FC<{ icon: IconDefinition, text: string, id: number }> = ({ icon, text, id }): JSX.Element => {
    return (
        <>
            < FontAwesomeIcon icon={icon} />
            <p>{text}</p>
        </>
    )
};

export default Section;