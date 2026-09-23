import { Box, Card, Typography } from "@mui/joy";
import type { ReactNode } from "react";

const InfoBox = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Card sx={{ mb: 4 }}>
      <Typography level="h2" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Box>{children}</Box>
    </Card>
  );
};

export default InfoBox;
