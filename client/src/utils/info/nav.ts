
import { faHome, faUser, faAlignCenter, faClipboardList, faGraduationCap, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

import INav from '../../interface/nav'


const info: INav[] = [
    {
        icon: faHome,
        coordinate: {
            desktop: 0,
            mobile: 0,
        },
        data: {
            ENG: "inicio",
            ESP: "inicio"
        },
    }, {
        icon: faUser,
        coordinate: {
            desktop: 518,
            mobile: 2112,
        },
        data: {
            ENG: "about me",
            ESP: "sobre mi"
        },
    }, {
        icon: faAlignCenter,
        coordinate: {
            desktop: 1091,
            mobile: 4335,
        },
        data: {
            ENG: "skills",
            ESP: "habilidades"
        },
    }, {
        icon: faClipboardList,
        coordinate: {
            desktop: 1775,
            mobile: 6611,
        },
        data: {
            ENG: "proyects",
            ESP: "proyectos"
        },
    }, {
        icon: faGraduationCap,
        coordinate: {
            desktop: 2316,
            mobile: 8669,
        },
        data: {
            ENG: "education",
            ESP: "educación"
        },
    }, {
        icon: faEnvelopeOpenText,
        coordinate: {
            desktop: 8000,
            mobile: 8890,
        },
        data: {
            ENG: "contact",
            ESP: "contacto"
        }
    }

]

export default info