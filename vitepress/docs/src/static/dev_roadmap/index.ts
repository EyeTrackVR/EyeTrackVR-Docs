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
        { label: 'Setup flashing of ESPs through anything other than VSC' },
    ]
}

const InProgress: IDevRoadMap = {
    state: false,
    object: [
        { label: 'Variable eye openness tracking (being improved)' },
        { label: 'Auto ROI cropping/better cropping' },
        { label: 'New GUI' },
        { label: 'New backend for new GUI' },
        { label: 'V5 hardware (focus on wired usage)' },
        { label: 'Dynamic foveated rendering via OpenXR' },
        { label: '3D, 9-point calibration via OpenXR/SteamVR overlay' },
        { label: 'Custom cam boards/cameras' },
        { label: 'Full hardware kits' },
    ]
}


const Planned: IDevRoadMap = {
    state: false,
    object: [

        { label: 'Game interaction SDK' },
        { label: 'Game developer integration program' },
    ]
}


export { InProgress, Completed, Planned }