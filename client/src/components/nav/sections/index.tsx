
import React, { Dispatch, SetStateAction } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

const Section: React.FC<{ icon: IconDefinition, text: string, id: number, coordinate: number, scrollValue: number, state: {screen: number, btn_view: string}, setState: Dispatch<SetStateAction<{screen: number, btn_view: string }> > }> = ({ icon, text, coordinate, id, scrollValue, state, setState }): JSX.Element => {

    console.log(coordinate)
    console.log(scrollValue)
    return (
        <>
        <a id={scrollValue === coordinate ? 'activ' : 'desactiv'} onClick={ () => {
            window.scroll(0, coordinate); 
            setState({ ...state, btn_view: 'nav_close' });
            return 
            }}
        >
            < FontAwesomeIcon icon={icon} />
            {text}
        </a>
        </>
    )
};

export default Section;