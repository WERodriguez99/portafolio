
import Css3 from '../../Images/skills/desktop/css3.png';
import Html5 from '../../Images/skills/desktop/html5.png';
import Express from '../../Images/skills/desktop/express.png';
import Node from '../../Images/skills/desktop/node.png';
import Postgresql from '../../Images/skills/desktop/postgresql.png';
import ReactJs from '../../Images/skills/desktop/react.png';
import JavaScript from '../../Images/skills/desktop/javascript.png'
import Sequelize from '../../Images/skills/desktop/sequelize.png'
import Redux from '../../Images/skills/desktop/redux.png';
import TypeScript from '../../Images/skills/desktop/typescript.png'
import MongoDB from '../../Images/skills/desktop/mongodb.png';
import Sass from '../../Images/skills/desktop/sass.png';
import Python from '../../Images/skills/desktop/python.png';

import mobileTypeScript from '../../Images/skills/mobile/typescript.png';
import mobileJavaScript from '../../Images/skills/mobile/javascript.png';
import mobilePython from '../../Images/skills/mobile/python.png';
import mobileNode from '../../Images/skills/mobile/nodejs.png';
import mobilePostgresql from '../../Images/skills/mobile/postgresql.png';
import mobileSequelize from '../../Images/skills/mobile/sequelize.png';
import mobileMongoBD from '../../Images/skills/mobile/mongodb.png';
import mobileExpress from '../../Images/skills/mobile/express.png';
import mobileHtml from '../../Images/skills/mobile/html.png';
import mobileReact from '../../Images/skills/mobile/react.png';
import mobileRedux from '../../Images/skills/mobile/redux.png';
import mobileSass from '../../Images/skills/mobile/sass.png';
import mobileCss3 from '../../Images/skills/mobile/css3.png';


import ISkills from '../../interface/skills';

const info: ISkills[] = [
    {
        title: "JavaScript",
        type: "languaje",
        desktop: {
            img: JavaScript,
        },
        mobile: {
            img: mobileJavaScript,
        },
    },
    {
        title: "Css3",
        type: "front",
        desktop: {
            img: Css3,
        },
        mobile: {
            img: mobileCss3,
        },
    }, 
    {
        title: "Html5",
        type: "front",
        desktop: {
            img: Html5,
        },
        mobile: {
            img: mobileHtml,
        },
    }, 
    {
        title: "ReactJs",
        type: "front",
        desktop: {
            img: ReactJs,
        },
        mobile: {
            img: mobileReact,
        },
    }, 
    {
        title: "Redux",
        type: "front",
        desktop: {
            img: Redux,
        },
        mobile: {
            img: mobileRedux,
        },
    }, 
    {
        title: "NodeJs",
        type: "back",
        desktop: {
            img: Node,
        },
        mobile: {
            img: mobileNode,
        },
    }, 
    {
        title: "PostgreSQL",
        type: "back",
        desktop: {
            img: Postgresql,
        },
        mobile: {
            img: mobilePostgresql,
        },
    }, 
    {
        title: "Sequalize",
        type: "back",
        desktop: {
            img: Sequelize,
        },
        mobile: {
            img: mobileSequelize,
        },
    }, 
    {
        title: "TypeScript",
        type: 'languaje',
        desktop: {
            img: TypeScript,
        },
        mobile: {
            img: mobileTypeScript,
        },
    }, 
    {
        title: "Express",
        type: "back",
        desktop: {
            img: Express,
        },
        mobile: {
            img: mobileExpress,
        },
    }, 
    {
        title: "MongoDB",
        type: "back",
        desktop: {
            img: MongoDB,
        },
        mobile: {
            img: mobileMongoBD,
        },
    },
    {
        title: "Sass",
        type: "front",
        desktop: {
            img: Sass,
        },
        mobile: {
            img: mobileSass,
        },
    },
    {
        title: "Python",
        type: "languaje",
        desktop: {
            img: Python,
        },
        mobile: {
            img: mobilePython,
        },
    },

]

export default info;