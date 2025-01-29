import { extendTheme } from "@mui/joy/styles";
import type { PaletteRange } from "@mui/joy/styles";
import { primaryLight } from "./palettes/light/primary";
import { secondaryLight } from "./palettes/light/secondary";
import { primaryDark } from "./palettes/dark/primary";
import { secondaryDark } from "./palettes/dark/secondary";

declare module "@mui/joy/styles" {
  interface ColorPalettePropOverrides {
    info: true;
  }

  interface Palette {
    secondary: PaletteRange;
    background: {
      default: string;
      paper: string;
    };
  }
}

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          ...primaryLight,
        },
        secondary: {
          ...secondaryLight,
        },
        text: {
          primary: "#111111",
        },
        background: {
          default: "#ffffff",
          paper: "#ffffff",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          ...primaryDark,
        },
        secondary: {
          ...secondaryDark,
        },
        text: {
          primary: "#ffffff",
        },
        background: {
          default: "#121212",
          paper: "#121212",
        },
      },
    },
  },
});

export { theme };
