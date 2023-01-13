import type { IDevRoadMap } from '../types/interfaces'

const Completed: IDevRoadMap = {
    state: true,
    object: [
        { label: 'Tracking algorithm' },
        { label: 'Calibration' },
        { label: 'GUI' },
        { label: 'PCB Designfor IR emitters' },
        { label: 'Dual Eye support' },
        { label: 'Firmware' },
        { label: 'Better documentation over things (setup, wiring etc.)' },
        { label: 'Setup dynamic WiFi credentials at runtime' },
    ]
}

const InProgress: IDevRoadMap = {
    state: false,
    object: [
        { label: 'Variable eye openness tracking' },
        { label: 'Release of V1 to the masses' },
        { label: 'Auto ROI cropping' },
        { label: 'Auto threshold\'s' },
        { label: 'Setup flashing of ESPs through anything other than VSC' },
        { label: 'New GUI' },
        { label: 'Power regulator board' },
        { label: 'New IR LED PCB (only for the power reg board)' },
    ]
}


const Planned: IDevRoadMap = {
    state: false,
    object: [
        { label: 'Support for binary parameters' },
        { label: 'Dynamic foveated rendering via OpenXR (not a guarantee)' },
        { label: 'Custom ESP-CAM boards' },
    ]
}


export { InProgress, Completed, Planned }