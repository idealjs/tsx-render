export enum FLAG {
    NORMAL = "NORMAL",
    NEW = "NEW",
    REMOVED = "REMOVED",
}

export interface IFlag {
    $flag: FLAG;
}

export type WithFlag<T> = { data: T } & IFlag;

export type ExtractArray<T> = T extends Array<infer C> ? C : any;

export type Compare<T> = (p: T, n: T) => boolean;
