import { reactive } from "@idealjs/reactive";
import Corn from "./src/Corn";

export { default as Corn } from "./src/Corn";

export * from "./src/types";

export const corn = new Corn();
export const render = corn.render;
export const createSignal = reactive.createSignal;
export const createDiffSignal = reactive.createDiffSignal;
export const createEffect = reactive.createEffect;
export const createRoot = reactive.createRoot;
export const createMemo = reactive.createMemo;
export const jsx = corn.jsx;
