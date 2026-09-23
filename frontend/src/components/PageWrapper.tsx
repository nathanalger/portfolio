import { Box } from "@mui/joy";
import type { ReactNode } from "react";

const PageWrapper = ({ children }: { children?: ReactNode }) => {
  return (
    <Box
      sx={{
        p: 3,
        minHeight: "calc(100dvh - 220px)",
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
