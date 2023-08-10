import type { IDevRoadMap } from '../types/interfaces'

const Completed: IDevRoadMap = {
    state: true,
    object: [
        { label: 'Tracking algorithm' },
        { label: 'Calibration' },
        { label: 'GUI' },
        { label: 'PCB Design for IR emitters' },
        { label: 'Dual Eye support' },
        { label: 'Firmware' },
        { label: 'Better documentation over things (setup, wiring etc.)' },
        { label: 'Setup dynamic WiFi credentials at runtime' },
        { label: 'OTA using Platformio' },
        { label: 'Auto threshold\'s' },
        { label: 'New LED Power regulator board (V4)' },
        { label: 'New IR LED PCB (only for the power reg board) (V4)' },
    ]
}

const InProgress: IDevRoadMap = {
    state: false,
    object: [
        { label: 'Variable eye openness tracking (being improved)' },
        { label: 'Release of V1 to the masses' },
        { label: 'Auto ROI cropping' },
        { label: 'Setup flashing of ESPs through anything other than VSC' },
        { label: 'New GUI' },
        { label: 'New backend for GUI' },
        { label: 'V5 hardware (focus on wired usage)' },
        
    ]
}


const Planned: IDevRoadMap = {
    state: false,
    object: [
        { label: 'HELP NEEDED: Dynamic foveated rendering via OpenXR (not a guarantee)' },
        { label: 'HELP NEEDED: 3D point calibration via OpenXR/SteamVR overlay' },
        { label: 'Custom cam boards/cameras?' },
    ]
}


export { InProgress, Completed, Planned }