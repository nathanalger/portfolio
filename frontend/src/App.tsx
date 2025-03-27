import { CssVarsProvider, extendTheme } from "@mui/joy";
import { Router } from "./routes";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          "50": "#ecfdf5",
          "100": "#d1fae5",
          "200": "#a7f3d0",
          "300": "#6ee7b7",
          "400": "#34d399",
          "500": "#10b981",
          "600": "#059669",
          "700": "#047857",
          "800": "#065f46",
          "900": "#064e3b",
        },
        neutral: {
          "50": "#fafafa",
          "100": "#f5f5f5",
          "200": "#e5e5e5",
          "300": "#d4d4d4",
          "400": "#a3a3a3",
          "500": "#737373",
          "600": "#525252",
          "700": "#404040",
          "800": "#262626",
          "900": "#171717",
        },
        warning: {
          "50": "#fefce8",
          "100": "#fef9c3",
          "200": "#fef08a",
          "300": "#fde047",
          "400": "#facc15",
          "500": "#eab308",
          "600": "#ca8a04",
          "700": "#a16207",
          "800": "#854d0e",
          "900": "#713f12",
        },
        background: {
          body: "var(--joy-palette-neutral-800)",
          surface: "var(--joy-palette-neutral-700)",
          popup: "var(--joy-palette-neutral-700)",
          level1: "var(--joy-palette-primary-900)",
          level2: "var(--joy-palette-primary-700)",
          tooltip: "var(--joy-palette-neutral-500)",
          backdrop: "var(--joy-palette-neutral-600)",
        },
        text: {
          primary: "var(--joy-palette-primary-lightChannel)",
          secondary: "var(--joy-palette-primary-200)",
          icon: "var(--joy-palette-neutral-500)",
        },
      },
    },
    dark: {
      palette: {},
    },
  },
});

document.body.style = "background: #020202;";

function App() {
  return (
    <>
      <CssVarsProvider theme={theme}>
        <Router />
      </CssVarsProvider>
    </>
  );
}

export default App;
