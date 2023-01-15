export interface ISocialLinks {
    icon: string,
    link: string,
}

export interface IMembers {
    name: string,
    avatar?: string,
    title?: string,
    links: ISocialLinks[],
}

export interface IDevRoadMapObject {
    label: string,
}

export interface IDevRoadMap {
    state: boolean,
    object: IDevRoadMapObject[],
}
