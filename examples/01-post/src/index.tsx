import { render } from "@idealjs/corn";
import App from "./App";
window.onload = () => {
    const container = document.getElementById("App");
    render(<App />, container!);
};
