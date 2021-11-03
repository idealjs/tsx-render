import { render } from "@idealjs/reactive-html";
import App from "./App";
window.onload = () => {
    const container = document.getElementById("App");
    render(<App />, container!);
};
