
import React, { useState } from 'react';

import info from '../../utils/info/proyects';
import ILang from '../../interface';
import Proyect from './proyect';
import Arrow from '../../utils/arrow';

import './index.scss';

const Proyects: React.FC<{ lang: string }> = ({ lang }): JSX.Element => {
    
    const [ positionProyect, setPositionProyect ] = useState(0)
    const  view: {
        btn_right: string,
        btn_left: string,
        desactiv: string,
        arrLength: number
    } = {
        btn_right: 'btn_right_act',
        btn_left: 'btn_left_act',
        desactiv: 'btn_des',
        arrLength: info.length - 1
    }
    
    return (
        <div className='container_proyects' id='proyects'>
            
            <div id='proyect'>

                <Proyect 
                    title={info[positionProyect].title} 
                    img={info[positionProyect].img} 
                    text={info[positionProyect][ lang as keyof ILang ]} 
                    />
            </div>

            <div id='pagination'>

                <button id={ positionProyect === 0 ? view.desactiv : view.btn_left } onClick={()=>{setPositionProyect(positionProyect - 1)}}> <Arrow direct={-90}/> </button>

                <h2> {info[positionProyect].title} </h2>

                <button id={ positionProyect >= view.arrLength ? view.desactiv : view.btn_right } onClick={()=>{ setPositionProyect(positionProyect + 1)}}> <Arrow direct={90}/> </button>
            </div>
             
        </div>
    )
}

export default Proyects;