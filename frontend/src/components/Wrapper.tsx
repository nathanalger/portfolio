import { Box, useColorScheme } from "@mui/joy";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

const Wrapper = () => {
  const { mode, systemMode } = useColorScheme();

  const m = mode == "system" ? systemMode : mode;

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        background:
          m == "dark"
            ? (t) => `
      radial-gradient(
        circle at 15% 20%,
        color-mix(in srgb, ${t.palette.primary[500]} 16%, transparent),
        transparent 35%
      ),
      radial-gradient(
        circle at 85% 80%,
        color-mix(in srgb, ${t.palette.primary[500]} 14%, transparent),
        transparent 35%
      )
    `
            : undefined,
        backgroundRepeat: "repeat-y",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <NavBar />
      </Box>

      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          width: "100%",
          px: { xs: 2, md: 3 },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Wrapper;
