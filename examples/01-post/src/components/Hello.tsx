import { createEffect, createSignal, createMemo } from "@idealjs/corn";

const Hello = (props: { name: string }) => {
    const { name } = props;

    const [state, setState] = createSignal(true);

    const [todos, setTodos] = createSignal<boolean[]>([]);

    const todosDiv = createMemo(() => {
        return todos().map((todo) => {
            return (
                <div>
                    {todo}
                    {todo}
                </div>
            );
        });
    });

    const onClick = () => {
        console.log("test test");
        setState((s) => !s);
        setTodos((todos) => [...todos, state()]);
    };

    createEffect(() => {
        console.log("Hello", name, state());
    });

    createEffect(() => {
        console.log("Hello", name, todos());
    });

    return (
        <div>
            <div>Hello {name}</div>
            <div>
                <div>
                    {123}
                    {321}
                </div>
                <button onClick={onClick}>
                    {"test"} {"button"}
                </button>
                {todosDiv}
            </div>
            <div>state {state}</div>
        </div>
    );
};

export default Hello;
