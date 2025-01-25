import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./components/route/Routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Routes></Routes>
  </StrictMode>
);
