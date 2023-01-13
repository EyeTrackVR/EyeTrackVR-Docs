import type { IDevRoadMap } from '../types/interfaces'

const InProgress: IDevRoadMap = {
    state: false,
    object: [
        { label: 'VitePress Documentation' },
    ]
}

const Completed: IDevRoadMap = {
    state: true,
    object: [
        { label: 'VitePress Documentation' }
    ]
}

const Planned: IDevRoadMap = {
    state: false,
    object: [
        { label: 'VitePress Documentation' }
    ]
}


export { InProgress, Completed, Planned }