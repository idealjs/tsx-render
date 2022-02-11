import {
    CornChild,
    CornElement,
    DOMAttributesOBJ,
    isCornText,
    CornComponent,
    JSXFunction,
    Renderer,
} from "./types";

import { createEffect } from "..";

const isString = (type: string | CornComponent | CornChild): type is string => {
    return typeof type == "string";
};

const isArray = <T>(data: T | T[]): data is T[] => {
    return Array.isArray(data);
};

interface ICorn {
    render: Renderer;
    jsx: JSXFunction;
}

export interface Props<Child = CornChild | CornChild[]> {
    ref?: any;
    children?: Child;
    onClick?: () => void;
}

const handleFunctionChild = (
    cornComponent: (props?: any) => CornElement | any,
    props?: any
): Text | Element | Element[] => {
    let element: Text | Element = document.createTextNode("");
    createEffect(() => {
        const res = cornComponent(props);
        console.log("test test", res);
        if (res.create != null) {
            const newElement = handleCornElement(res);
            element.replaceWith(newElement);
            element = newElement;
        }
        if (isArray(res)) {
            element = res.map((r) => {
                return handleCornElement(r);
            }) as any;
        }
        if (isCornText(res)) {
            element.textContent = res.toString();
        }
    });
    return element!;
};

const handleCornElement = (cornEl: CornElement) => {
    console.debug("[debug] handleCornElement", cornEl);
    const element = cornEl.create();
    cornEl.mount(element);
    return element;
};

const handleCornChild = (child: CornChild) => {
    if (isCornText(child)) {
        return document.createTextNode(child.toString());
    }

    if (isArray(child)) {
        return child.map((c) => {
            return handleCornElement(c);
        });
    }

    if (child instanceof Function) {
        return handleFunctionChild(child);
    }

    return handleCornElement(child);
};

const appedCornChild = (target: Element, child: CornChild) => {
    const res = handleCornChild(child);
    if (res) {
        if (isArray(res)) {
            target.append(...res);
        } else {
            target.append(res);
        }
    }
};

class Corn implements ICorn {
    constructor() {}

    public render = (element: CornElement, container: Element) => {
        element.mount(container);
    };

    public jsx = <P extends Props<CornChild> = {}>(
        type: string | CornComponent<P>,
        props: P,
        key: any
    ) => {
        if (type instanceof Function) {
            return type(props);
        }

        let cornElement: CornElement | null = null;

        const create = () => {
            const element = document.createElement(type);
            Object.entries(props).forEach((entry) => {
                if (entry[0] === "style") {
                }
                if (DOMAttributesOBJ[entry[0]] != null) {
                    Reflect.set(element, DOMAttributesOBJ[entry[0]], entry[1]);
                }
            });
            return element;
        };

        const mount = (target: Element) => {
            console.debug("[debug] mount", target);

            if (props.children == null) {
                target.appendChild(create());
                return;
            }

            if (isArray(props.children)) {
                props.children.forEach((child) => {
                    appedCornChild(target, child);
                });
                return;
            }

            appedCornChild(target, props.children);
        };

        const update = () => {};

        const destory = () => {};

        cornElement = {
            type,
            props,
            key,

            create,
            mount,
            update,
            destory,
        };

        return cornElement!;
    };

    public jsxs = <P extends Props<CornChild[]> = {}>(
        type: string | CornComponent<P>,
        props: P,
        key: any
    ) => {
        if (type instanceof Function) {
            return type(props);
        }

        let cornElement: CornElement | null = null;

        const create = () => {
            const element = document.createElement(type);
            Object.entries(props).forEach((entry) => {
                if (entry[0] === "style") {
                }
                if (DOMAttributesOBJ[entry[0]] != null) {
                    Reflect.set(element, DOMAttributesOBJ[entry[0]], entry[1]);
                }
            });
            return element;
        };

        const mount = (target: Element) => {
            console.debug("[debug] mount", target);

            if (props.children == null) {
                target.appendChild(create());
                return;
            }

            if (isArray(props.children)) {
                props.children.forEach((child) => {
                    appedCornChild(target, child);
                });
                return;
            }

            appedCornChild(target, props.children);
        };

        const update = () => {};

        const destory = () => {};

        cornElement = {
            type,
            props,
            key,

            create,
            mount,
            update,
            destory,
        };

        return cornElement!;
    };
}

export default Corn;
