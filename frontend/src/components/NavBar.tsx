import { Box, Typography } from "@mui/joy";
import NavButton from "./NavButton";
import { useDevice } from "../hook/useDevice";
import { useEffect, useState } from "react";
interface Page {
  slug: string;
  displayName: string;
}
const pages: Page[] = [
  { slug: "home", displayName: "Home" },
  { slug: "projects", displayName: "Projects" },
];
const NavBar = () => {
  const deviceinfo = useDevice();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (!deviceinfo.isMobile)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: (t) =>
            scrolled
              ? `color-mix(in srgb, ${t.palette.background.body} 50%, transparent)`
              : undefined,
          backdropFilter: scrolled ? "blur(12px)" : undefined,
          WebkitBackdropFilter: scrolled ? "blur(12px)" : undefined,
        }}
      >
        {pages.map((p) => (
          <NavButton key={p.slug} routeKey={p.slug}>
            {p.displayName}
          </NavButton>
        ))}
      </Box>
    );
  return (
    <>
      <Box
        component="button"
        onClick={() => setMenuOpen(true)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: 65,
          px: 4,
          border: 0,
          borderBottom: (t) => `1px solid ${t.palette.text.primary}`,
          bgcolor: (t) =>
            scrolled
              ? `color-mix(in srgb, ${t.palette.background.body} 50%, transparent)`
              : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : undefined,
          WebkitBackdropFilter: scrolled ? "blur(12px)" : undefined,
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            fontWeight: 900,
          }}
        >
          NATHAN{" "}
          <Typography
            sx={{
              color: "primary.500",
            }}
          >
            ALGER
          </Typography>
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
          <Box sx={{ width: 24, height: 2, bgcolor: "text.primary" }} />
          <Box sx={{ width: 24, height: 2, bgcolor: "text.primary" }} />
          <Box sx={{ width: 24, height: 2, bgcolor: "text.primary" }} />
        </Box>
      </Box>
      {menuOpen && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            display: "flex",
            flexDirection: "column",
            bgcolor: "background.body",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 65,
              px: 2,
              borderBottom: (t) => `1px solid ${t.palette.text.primary}`,
            }}
          >
            <Typography
              sx={{
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                fontWeight: 900,
              }}
            >
              NATHAN{" "}
              <Typography
                sx={{
                  color: "primary.500",
                }}
              >
                ALGER
              </Typography>
            </Typography>
            <Box
              component="button"
              onClick={() => setMenuOpen(false)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                border: 0,
                background: "transparent",
                color: "text.primary",
                fontSize: 28,
                cursor: "pointer",
              }}
            >
              ×
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              p: 2,
            }}
          >
            {pages.map((p) => (
              <NavButton
                key={p.slug}
                routeKey={p.slug}
                onClick={() => setMenuOpen(false)}
              >
                {p.displayName}
              </NavButton>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default NavBar;
