import Reactive from "./src/Reactive";

export { default, ReadFunction, WriteFunction } from "./src/Reactive";
export * from "./src/type";

export const reactive = new Reactive();
