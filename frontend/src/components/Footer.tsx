import { Box, Link, Typography } from "@mui/joy";
import { useDevice } from "../hook/useDevice";
import { EmailLink, GithubLink, LinkedInLink } from "../globals/Socials";

const Footer = () => {
  const { isMobile } = useDevice();

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: 3,
        mt: 6,
        pt: 4,
        pb: 3,
        borderTop: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <Typography level="title-lg">Nathan Alger</Typography>

        <Typography
          level="body-sm"
          sx={{
            mt: 0.5,
            color: "text.secondary",
          }}
        >
          B.S. Computer Engineering
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "center" : "flex-end",
          gap: 1,
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link href={GithubLink} target="_blank">
            GitHub
          </Link>

          <Link href={LinkedInLink} target="_blank">
            LinkedIn
          </Link>

          <Link href={`mailto:${EmailLink}`}>Email</Link>
        </Box>

        <Typography level="body-xs" sx={{ color: "text.tertiary" }}>
          © {new Date().getFullYear()} Nathan Alger
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
