import { CssBaseline, CssVarsProvider, extendTheme } from "@mui/joy";
import { type ReactNode } from "react";

const theme = extendTheme({});

const ThemeRoot = ({ children }: { children: ReactNode }) => {
  return (
    <CssVarsProvider theme={theme} defaultMode="system">
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
};

export default ThemeRoot;
