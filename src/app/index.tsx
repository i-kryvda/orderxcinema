import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { ThemeProvider } from "./providers/theme-provider/ui/ThemeProvider.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
