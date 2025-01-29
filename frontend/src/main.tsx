import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes.tsx";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { theme } from "./theme.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssVarsProvider theme={theme} defaultMode="dark">
      <CssBaseline />
      <RouterProvider router={routes} />
    </CssVarsProvider>
  </StrictMode>
);
