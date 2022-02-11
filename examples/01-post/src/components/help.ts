import { createEffect, createMemo } from "@idealjs/corn";
import { ReadFunction } from "@idealjs/reactive";

export const value = <T>(r: ReadFunction<T>, callback: (v: T) => any) => {
    return () => callback(r());
};

export const list = <T extends string | number | boolean>(
    read: ReadFunction<T[]>
) => {
    const nodes = createMemo(() => {
        return read().map((v) => {
            const li = document.createElement("li");
            li.textContent = v.toString();
            return li;
        });
    });
    const el = document.createElement("ul");
    createEffect(() => {
        el.textContent = "";
        const d = nodes();
        d && el.append(...d);
    });
    return el;
};

export const upsert = (
    parent: Element,
    value: Node | string | null,
    current: Node | string | null
) => {
    console.debug("[debug] upsert", parent, value, current);
    if (value === current) {
        return value;
    }

    if (value == null) {
        parent.textContent = "";
        return value;
    }

    if (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean"
    ) {
        parent.textContent = value.toString();
        return value;
    }

    if (value instanceof Node) {
        if (current instanceof Node) {
            parent.replaceChild(value, current);
            return value;
        }
        parent.textContent = "";
        parent.append(value);
        return value;
    }

    console.warn(`Skipped inserting ${value}`);
    return current;
};
