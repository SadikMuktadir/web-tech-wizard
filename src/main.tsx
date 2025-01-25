import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./components/route/Routes";
import { ThemeProvider } from "./shadcn/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Routes></Routes>
    </ThemeProvider>
  </StrictMode>
);
