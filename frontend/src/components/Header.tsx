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
        mt: 5,
        mb: 8,
      }}
    >
      <Typography
        level="h1"
        sx={{
          fontSize: { xs: "2.5rem", sm: "5rem", md: "7rem" },
          lineHeight: 0.95,
          fontWeight: 800,
          mb: 5,
          //textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>

      {description && <Typography level="body-lg">{description}</Typography>}
    </Box>
  );
};

export default Header;
