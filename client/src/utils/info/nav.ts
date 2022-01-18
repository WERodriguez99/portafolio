
import { faHome, faUser, faAlignCenter, faClipboardList, faGraduationCap, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

import INav from '../../interface/nav'


const info: INav[] = [
    {
        icon: faHome,
        path: "/",
        data: {
            ENG: "inicio",
            ESP: "inicio"
        },
    }, {
        icon: faUser,
        path: "about-me",
        data: {
            ENG: "about me",
            ESP: "sobre mi"
        },
    }, {
        icon: faAlignCenter,
        path: "skills",
        data: {
            ENG: "skills",
            ESP: "habilidades"
        },
    }, {
        icon: faClipboardList,
        path: "proyects",
        data: {
            ENG: "proyects",
            ESP: "proyectos"
        },
    }, {
        icon: faGraduationCap,
        path: "education",
        data: {
            ENG: "education",
            ESP: "educación"
        },
    }, {
        icon: faEnvelopeOpenText,
        path: "contact",
        data: {
            ENG: "contact",
            ESP: "contacto"
        }
    }

]

export default info