import { Box, Button, Typography } from "@mui/joy";
import { useNavigate } from "react-router";
const HeroHeader = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "calc(100dvh - 65px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        isolation: "isolate",
        px: { xs: 3, md: 6 },
        py: 8,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1000,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          level="body-sm"
          sx={{
            mb: 2,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "text.secondary",
          }}
        >
          Hello, I'm
        </Typography>
        <Typography
          level="h1"
          sx={{
            fontSize: { xs: "3rem", sm: "5rem", md: "7rem" },
            lineHeight: 0.95,
            letterSpacing: "-0.055em",
            fontWeight: 800,
            mb: 3,
          }}
        >
          NATHAN{" "}
          <Box component="span" sx={{ color: "primary.500" }}>
            ALGER
          </Box>
        </Typography>
        <Typography
          level="h2"
          sx={{
            fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.2rem" },
            fontWeight: 400,
            letterSpacing: "-0.02em",
            mb: 3,
          }}
        >
          Michigan Technological University
        </Typography>
        <Typography
          level="body-lg"
          sx={{
            maxWidth: 680,
            mx: "auto",
            color: "text.secondary",
            lineHeight: 1.7,
            fontSize: { xs: "1rem", md: "1.15rem" },
          }}
        >
          Computer Engineering Student focused on embedded systems, hardware,
          and software development.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 5,
            flexWrap: "wrap",
            height: 50,
          }}
        >
          <Button
            onClick={() => navigate("/projects")}
            sx={{
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": { transform: "translateY(-2px)", boxShadow: "md" },
            }}
          >
            View my work
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              document.getElementById("about-me")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            sx={{
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": { transform: "translateY(-2px)", boxShadow: "md" },
            }}
          >
            About me
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          color: "text.tertiary",
          animation: "hero-bounce 2s ease-in-out infinite",
          "@keyframes hero-bounce": {
            "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
            "50%": { transform: "translateX(-50%) translateY(6px)" },
          },
        }}
      >
        <Typography
          level="body-xs"
          sx={{ letterSpacing: "0.15em", textTransform: "uppercase" }}
        >
          Scroll
        </Typography>
        <Box
          sx={{
            width: 24,
            height: 38,
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
            pt: 1,
          }}
        >
          <Box
            sx={{
              width: 4,
              height: 4,
              borderRight: (t) => `1px solid ${t.palette.text.primary}`,
              borderBottom: (t) => `1px solid ${t.palette.text.primary}`,
              transform: "rotate(45deg)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default HeroHeader;
