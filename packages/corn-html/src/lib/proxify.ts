const handler = <T extends Object>(proxyKeys: (string | symbol)[]) => ({
    get(target: T, p: string | symbol, reciver: any) {
        if (proxyKeys.includes(p) && (target as any)[p] instanceof Function) {
            return Reflect.get(target, p, reciver)();
        }
        return Reflect.get(target, p, reciver);
    },
});

type ValueOf<T> = T[keyof T];

export type ExtractConfig<C> = C extends Array<infer C2>
    ? C2 extends () => infer T
        ? T
        : C2
    : ValueOf<C> extends () => infer T
    ? T
    : ValueOf<C>;

export function proxify<T extends object>(
    target: T,
    proxyKeys: (string | symbol)[]
): T extends Array<any>
    ? Array<ExtractConfig<T>>
    : { [key: string]: ExtractConfig<T> } {
    return new Proxy(target, handler(proxyKeys)) as any;
}
