
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Section from './sections';
import info from '../../utils/info/nav';
import { data } from '../../interface/nav';
import IMobileDesktop from '../../interface/mobileDesktop';
import utils from '../../utils';

import './index.scss';

const screen = utils.width();

const Nav: React.FC<{ lang: string, setLang: Dispatch<SetStateAction<string>> }> = ({ lang, setLang }): JSX.Element => {

    const [viewNav, setViewNav] = useState({
        scrollValue: 0,
        classStyle: '0',
    })

    const [viewMobileNav, setViewMobileNav] = useState({

        screen: window.innerWidth,
        btn_view: 'nav_close',
    })

    const [ screenWidth, setScreenWidth ] = useState(window.screen.width)


    window.onscroll = () => {

        const curretScroll = window.scrollY
        if(viewMobileNav.screen > 380) viewNav.scrollValue < curretScroll ? setViewNav({ scrollValue: curretScroll, classStyle: '-5rem' }) : setViewNav({ scrollValue: curretScroll, classStyle: '0' })

        else setViewNav({ ...viewNav, scrollValue: curretScroll })
    }

    useEffect(()=> {
        //setViewMobileNav({...viewMobileNav, screen: window.screen.width})
        setScreenWidth(window.screen.width)
        console.log(window.screen.width)
    }, [screenWidth])

 
    return (

            <>
            { 
            viewMobileNav.screen <= 380 && <button id='btn_navOpen' onClick={() => setViewMobileNav({ ...viewMobileNav, btn_view: 'nav_open' })}> < FontAwesomeIcon icon={faBars} /> </button> 
            } 

            {
                viewMobileNav.screen <= 380 && viewMobileNav.btn_view === 'nav_open' && <div className='backClean' onClick={() => setViewMobileNav({ ...viewMobileNav, btn_view: 'nav_close' })}> </div> 
            }

             <div className={`container_nav ${viewMobileNav.btn_view}`} style={{ marginTop: `${viewNav.classStyle}` }}>

            {
            viewMobileNav.screen <= 380 && <button id='btn_navClose' onClick={() => setViewMobileNav({ ...viewMobileNav, btn_view: 'nav_close' })}> < FontAwesomeIcon icon={faTimes} /> </button>
            }

                {info.map((el, index) => <div key={index} className='container_icon'> < Section icon={el.icon} id={index} text={el.data[lang as keyof data]} coordinate={el.coordinate[ screen as keyof IMobileDesktop ]} scrollValue={viewNav.scrollValue} setState={ setViewMobileNav } state={viewMobileNav} /> </div>)}

                {/* <h3 id='languaje' onClick={() => setLang(lang === "ENG" ? "ESP" : "ENG")} >{lang}</h3> */}
            </div>
            </>

    )
}

export default Nav;