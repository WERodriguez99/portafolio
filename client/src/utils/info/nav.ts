
import { faHome, faUser, faAlignCenter, faClipboardList, faGraduationCap, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

import INav from '../../interface/nav'


const info: INav[] = [
    {
        icon: faHome,
        data: {
            ENG: "inicio",
            ESP: "inicio"
        },
    }, {
        icon: faUser,
        data: {
            ENG: "me",
            ESP: "sobre mi"
        },
    }, {
        icon: faAlignCenter,
        data: {
            ENG: "skills",
            ESP: "habilidades"
        },
    }, {
        icon: faClipboardList,
        data: {
            ENG: "proyects",
            ESP: "proyectos"
        },
    }, {
        icon: faGraduationCap,
        data: {
            ENG: "education",
            ESP: "educación"
        },
    }, {
        icon: faEnvelopeOpenText,
        data: {
            ENG: "contact",
            ESP: "contacto"
        }
    }

]

export default info