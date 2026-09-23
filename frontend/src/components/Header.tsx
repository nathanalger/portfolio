import { Box, Typography } from "@mui/joy";
import type { ReactNode } from "react";

const Header = ({
  title,
  description,
}: {
  title: string | ReactNode;
  description?: string;
}) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 3,
        mb: 6,
      }}
    >
      <Typography
        level="h1"
        sx={{
          fontSize: { xs: "2.5rem", sm: "5rem", md: "7rem" },
          lineHeight: 0.95,
          letterSpacing: "-0.055em",
          fontWeight: 800,
          mb: 3,
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>

      {description && <Typography level="body-lg">{description}</Typography>}
    </Box>
  );
};

export default Header;
