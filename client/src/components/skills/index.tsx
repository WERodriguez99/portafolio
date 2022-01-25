
import React from 'react';

import Element from './element';
import info from '../../utils/info/skills';

import './index.scss';

import utils from '../../utils';
import IMobileDesktop from '../../interface/mobileDesktop';

const screen = utils.width();

const Skills: React.FC = (): JSX.Element => {
    return (
        <div className='container_skills'>
            
                <div className='container' id='languaje'>
                    <h2> Languaje </h2> 
                    {info.map( (el, index) => el.type === "languaje" && 
                        
                        <div key={index} className='skill' >
                            <Element title={el.title} img={el[ screen as keyof IMobileDesktop ].img} /> 
                        </div>

                    )}
                </div>
                
                <div className='container'>
                    <h2> Front </h2>
                    {info.map( (el, index) => el.type === "front" && 
                    
                        <div key={index} className='skill' > 
                            <Element title={el.title} img={el[ screen as keyof IMobileDesktop ].img} /> 
                        </div>)}
                </div>

                <div className='container'>
                    <h2> Back </h2>
                    {info.map( (el, index) => el.type === "back" && 
                        <div key={index} className='skill' > 
                            <Element title={el.title} img={el[ screen as keyof IMobileDesktop ].img} /> 
                        </div>)}
                </div>
        </div>
    )
}

export default Skills;