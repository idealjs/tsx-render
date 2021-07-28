import Corn from "./src/Corn";
import container from "./src/inversify.config";
import TYPES from "./src/types";

export const corn = container.get<Corn>(TYPES.Corn);

export { default as Corn } from "./src/Corn";
export const render = corn.render;
export const createSignal = corn.reactive.createSignal;
export const createEffect = corn.reactive.createEffect;
export const jsx = corn.jsx;
