import { createRoot } from "react-dom/client";
import { App } from "./app";

const container = document.querySelector("#app");
const root = createRoot(container!);

root.render(<App />);

// სანამ რემოუტზე აიტან ბრენჩს / კომიტს
// pnpm lint
// pnpm format
// pnpp build
// დარწუნდები ყველაფერი ნორმ არი,
// lint ერორრები გქონდა ამ შემთხვევაში,  build არ გქონდა დაიგნორებული .gitignore-ში
