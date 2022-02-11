import CornElement from "./CornElement";

const render = (cornElement: CornElement, container: Element | null) => {
    const el = cornElement.create();
    if (container == null) {
        throw new Error("");
    }
    container.append(el);
};

export default render;
