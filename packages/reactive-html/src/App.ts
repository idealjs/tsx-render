import { createEffect, createMemo, createSignal } from "@idealjs/corn";
import CornElement from "./lib/CornElement";
import hyper from "./lib/hyper";

const App = (): CornElement => {
    const [name, setName] = createSignal<string>("world");
    const [todos, setTodos] = createSignal<number[]>([]);
    const nameDiv = createMemo(() => {
        return hyper("div", { children: [name()] });
    });

    const todosDiv = createMemo(() => {
        return todos().map((todo) => hyper("div", { children: [todo] }));
    });

    const testFunc = () => "test";

    setTimeout(() => {
        setName("arnold");
    }, 1000);

    setInterval(() => {
        setTodos((todos) => [...todos, todos.length + 1]);
    }, 1000);

    createEffect(() => {
        console.log("test test", name());
    });

    return hyper("div", {
        children: ["hello", name, nameDiv, todosDiv, testFunc],
    });
};

export default App;
