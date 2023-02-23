import type { IDevRoadMap } from '../types/interfaces'

const RequiredHardware: IDevRoadMap = {
    state: true,
    object: [
        {label: "2 cartes ESP32 CAM"},
        {label: "2 caméras 160 degrés"},
        {label: "1 connecteur USB pour alimenter vos ESPs"},
        {label: "1 programmeur (vivement recommandé d'en prendre 2))"},
        {label: "Émetteurs infrarouges, résistances, et préférablement des PCBs"},
        {label: "Câble de calibres plus petit pour alimenter les ESP"},
        {label: "Câble de plus gros calibre pour alimenter les LEDs infrarouges"},
        {label: "Une imprimante 3D pour imprimer les fixations/montures. (utiliser des sites comme JLCPCB peut également être une option)"},
        {label: "De la colle, pistolet à colle fortement recommandé"},
    ]
}

export { RequiredHardware }