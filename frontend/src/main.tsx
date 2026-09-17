import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Provider from "./architecture/Provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider />
  </StrictMode>,
);
