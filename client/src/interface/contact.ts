
import { IconDefinition } from '@fortawesome/free-solid-svg-icons' 

export type Contact = {
    icon: IconDefinition,
    url: string,
    name: string,
}

interface IContact {
    waysToContact: Contact[]
    ENG: string,
    ESP: string,
}

export default IContact