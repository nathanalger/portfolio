import { Box, Typography } from "@mui/joy";
import type { SxProps } from "@mui/joy/styles/types";
import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDevice } from "../hook/useDevice";

const NavButtonBaseSx: SxProps = {
  position: "relative",
  backgroundColor: "transparent",
  border: 0,
  px: 3,
  py: 2,
  boxSizing: "border-box",
  overflow: "hidden",
  userSelect: "none",

  "--nav-indicator-height": "0px",

  transition: "background-color 0.2s ease",

  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "var(--nav-indicator-height)",
    backgroundColor: (t) => t.palette.text.primary,
    transition: "height 0.15s ease",
  },

  "&:hover": {
    backgroundColor: (t) =>
      `color-mix(in srgb, ${t.palette.text.primary} 10%, transparent)`,

    "--nav-indicator-height": "3px",
  },

  "&:active": {
    backgroundColor: (t) =>
      `color-mix(in srgb, ${t.palette.text.primary} 20%, transparent)`,
  },
};

const NavButton = ({
  children,
  routeKey,

  onClick,
}: {
  children: ReactNode;
  routeKey: string;

  onClick?: () => void;
}) => {
  const { isMobile } = useDevice();
  const loc = useLocation();
  const navigate = useNavigate();

  const active =
    (routeKey === "home" && loc.pathname === "/") ||
    loc.pathname === `/${routeKey}` ||
    loc.pathname.startsWith(`/${routeKey}/`);

  return (
    <Box
      onClick={() => {
        navigate(`/${routeKey}`);
        onClick?.();
      }}
      component="button"
      sx={{
        ...NavButtonBaseSx,

        ...(active &&
          !isMobile && {
            "--nav-indicator-height": "3px",
          }),

        ...(active &&
          isMobile && {
            bgcolor: (t) => t.palette.background.level1,
          }),
      }}
    >
      <Typography>{children}</Typography>
    </Box>
  );
};

export default NavButton;
