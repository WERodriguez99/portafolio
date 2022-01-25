
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export type data = {
    ENG: string,
    ESP: string,
}

interface INav {
    icon: IconDefinition,
    coordinate: {
        desktop: number,
        mobile: number,
    },
    data: data,
}

export default INav 