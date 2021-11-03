import CornElement, { Props } from "./cornElement";

const hyper = <T extends Props>(
    type: string | ((props: Props) => CornElement),
    props: Props
): CornElement => {
    return new CornElement(type, props);
};

export default hyper;
