
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import IContact from "../../interface/contact";

const informationUsed: IContact = {
    waysToContact: [
        { 
            icon: faWhatsapp, 
            url:"https://wa.link/fxah4j", 
            name:"WhatsApp", 
        }, 
        { 
            icon: faLinkedinIn, 
            url:"https://www.linkedin.com/in/w-e-rodriguez/", 
            name: "LinkedIn", 
        },
        { 
            icon: faEnvelope, 
            url:"https://mail.google.com/a/?view=cm&fs=1&to=w.e.rodriguez99@gmail.com", 
            name:"Gmail", 
        }
    ],
    ENG: '',
    ESP: 'Contact'
}
export default informationUsed;