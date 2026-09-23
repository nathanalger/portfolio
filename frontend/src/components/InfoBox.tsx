import { Box, Typography } from "@mui/joy";
import type { ReactNode } from "react";

const InfoBox = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  <Box>
    <Typography level="h2">{title}</Typography>
    <Box>{children}</Box>
  </Box>;
};

export default InfoBox;
