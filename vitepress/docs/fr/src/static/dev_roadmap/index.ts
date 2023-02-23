import type { IDevRoadMap } from '../types/interfaces'

const Completed: IDevRoadMap = {
    state: true,
    object: [
        { label: 'Algorythme de suivi' },
        { label: 'Calibration' },
        { label: 'Interface utilisateur' },
        { label: 'Design des circuits imprimés pour les emeteurs infrarouges' },
        { label: 'Support pour 2 yeux simultanément' },
        { label: 'Firmware' },
        { label: 'Meuilleur doccumentation (préparation, soudure etc.)' },
        { label: 'envoi des identifiants WiFi au démarage' },
    ]
}

const InProgress: IDevRoadMap = {
    state: false,
    object: [
        { label: 'Ouverture pupillaire variable' },
        { label: 'Sorti de la version 1.0 au masses' },
        { label: 'découpage  automatique de la région d\'intérêt' },
        { label: 'Seuil automatique' },
        { label: 'mise en place du téléversement via autre chose que VS' },
        { label: 'Nouvelle interface' },
        { label: 'Carte de regulation de puissance' },
        { label: 'Nouveau circuit imprimé pour les LEDs infrarouges (uniquement pour la nouvelle carte de régulation)' },
    ]
}


const Planned: IDevRoadMap = {
    state: false,
    object: [
        { label: 'Support pour des parametres binnaires' },
        { label: 'Rendu Rendu Fovéal dynamique via OpenXR (pas garentis)' },
        { label: 'Cartes ESP-CAM modifiés' },
    ]
}


export { InProgress, Completed, Planned }