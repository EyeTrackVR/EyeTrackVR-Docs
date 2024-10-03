import type { IDevRoadMap } from '../types/interfaces'

const RequiredHardware: IDevRoadMap = {
    state: true,
    object: [
        {label: "2 ESP 32 CAM boards"},
        {label: "2 160 degree cameras"},
        {label: "1 USB board to power your ESPs"},
        {label: "1 Programmer board(buying an extra is reccomended)"},
        {label: "IR emitters, resistors, and preferably PCBs"},
        {label: "Lower gauge wire to power ESPs"},
        {label: "Higher gauge wire to power IR LEDs"},
        {label: "3d printer to print mounts. (Buying them from some place like JLCPCB is also an option)"},
        {label: "Glue of some form, hot glue highly recommended."},
    ]
}

export { RequiredHardware }